export const getTeam = async () => {
  const res = await fetch('/api/teams/1');

  if (res.status !== 200) {
    throw new Error(
      `Failed to get team. Server responded with a ${res.status} code`
    );
  }

  const team = await res.json();

  console.log('result', team);

  return res;
};
