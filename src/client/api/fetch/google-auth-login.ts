export const googleAuthLogin = async (token: string) => {
  const res = await fetch(`/api/google-auth-login`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  });

  if (res.status !== 200) {
    throw new Error(
      `Failed Google auth login request. Server responded with a ${res.status} code`
    );
  }
};
