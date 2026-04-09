export async function createGame(playerName: string) {
  const res = await fetch("/api/game", {
    method: "POST",
    body: JSON.stringify({ playerName }),
  });

  const { data, error } = await res.json();
  if (error) throw new Error(error.message);

  return data; // contains id, playerName, score, created_at, etc.
}

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

export async function getGame(id: string) {
  const res = await fetch(`/api/game/${id}`);
  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}

export async function getTopGames() {
  const base = process.env.NEXT_PUBLIC_SITE_URL
  
  const res = await fetch(`${base}/api/game/top`); 
  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}

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
