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
  console.log("what is id:", id);

  const res = await fetch(`/api/game/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updates),
  });

  console.log("does it get this far", res);

  const json = await res.json();
  console.log("raw JSON from API:", json);

  const { data, error } = json;
  if (error) throw new Error(error.message);

  console.log("does this happen");

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