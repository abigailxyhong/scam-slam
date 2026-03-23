export async function createGame(playerName: string) {
  const res = await fetch("/api/game", {
    method: "POST",
    body: JSON.stringify({ playerName }),
  });

  const { data, error } = await res.json();
  if (error) throw new Error(error.message);

  return data; // contains id, playerName, score, created_at, etc.
}

export async function updateGame(id: string, updates: any) {
    const res = await fetch("/api/game/${id}", {
        method: "PATCH",
        body: JSON.stringify({updates})
    });

    const { data, error } = await res.json();
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
  const res = await fetch(`/api/game/top`);
  const { data, error } = await res.json();
  if (error) throw new Error(error.message);
  return data;
}