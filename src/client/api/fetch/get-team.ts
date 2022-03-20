export const getTeam = async (token: string) => {
  const res = await fetch('/api/team', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (res.status !== 200) {
    throw new Error(
      `Failed to get team. Server responded with a ${res.status} code`
    );
  }

  return await res.json();
};
