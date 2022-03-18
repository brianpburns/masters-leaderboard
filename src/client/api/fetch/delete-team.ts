export const deleteTeam = async (id: number) => {
  const res = await fetch(`/api/teams/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (res.status !== 200) {
    throw new Error(
      `Failed to delete team. Server responded with a ${res.status} code`
    );
  }
};
