
interface ConfigResponse {
  selectionPhase: boolean;
}

export const getConfig = async () => {
  const res = await fetch('/api/config');

  if (![200, 201].includes(res.status)) {
    throw new Error(`Failed to get team. Server responded with a ${res.status} code`);
  }

  return (await res.json()) as ConfigResponse;
};
