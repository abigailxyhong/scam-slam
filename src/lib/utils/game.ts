/**
 * Creates a new game record in the database
 * 
 * Sends a POST request to the /api/game endpoint with the player's name
 * The API returns a game object containing:
 * - id
 * - playerName
 * - score (initially 0)
 * - created_at timestamp
 * 
 * @param playerName player's submitted name for the game session
 * @returns a promise resolving to the created game object
 */
export async function createGame(playerName: string) {
  const res = await fetch("/api/game", {
    method: "POST",
    body: JSON.stringify({ playerName }),
  });

  const { data, error } = await res.json();
  if (error) throw new Error(error.message);

  return data; 
}

/**
 * Updates an existing game record in the database
 * 
 * Accepts partial updates such as:
 * - score
 * - finished_at timestamp
 * 
 * Sends a PATCH request to the /api/game/:id endpoint with the updates
 * @param id the unique identifier of the game to update
 * @param updates the updates to apply to the game record
 * @returns a promise resolving to the updated game object
 */
export async function updateGame(id: string, updates: { score?: number; finished_at?: string }) {

  const res = await fetch(`/api/game/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updates),
  });

  const json = await res.json();

  const { data, error } = json;
  if (error) throw new Error(error.message);

  return data;
}

// Retrieves a game record by its unique identifier
export async function getGame(id: string) {
  const res = await fetch(`/api/game/${id}`);
  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}

// Retrieves the top game records for the leaderboard
export async function getTopGames() {
  const base = process.env.NEXT_PUBLIC_SITE_URL
  
  const res = await fetch(`${base}/api/game/top`); 
  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}

/**
 * Reocrds a player's attempt at answering a question
 * 
 * Stores:
 * - gameId
 * - questionId
 * - whether the answer was correct
 * - time taken to answer
 * - question type (email, message, website)
 * 
 * Used for analytics
 * @param param0 
 * @returns 
 */
export async function recordQuestionAttempt({
  gameId,
  questionId,
  isCorrect,
  timeTakenMs,
  questionType
}: {
  gameId: string;
  questionId: string;
  isCorrect: boolean;
  timeTakenMs: number;
  questionType: string;
}) {
  const res = await fetch("/api/game/attempt", {
    method: "POST",
    body: JSON.stringify({
      gameId,
      questionId,
      isCorrect,
      timeTakenMs,
      questionType
    })
  });

  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}
