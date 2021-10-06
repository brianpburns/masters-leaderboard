export const getTeam = async (id: number) => {
  const res = await fetch(`/api/teams/${id}`);

  if (res.status !== 200) {
    throw new Error(
      `Failed to get team. Server responded with a ${res.status} code`
    );
  }

  return await res.json();
};
