import { baseUrl } from '../config';

interface ConfigResponse {
  selectionPhase: boolean;
}

export const getConfig = async () => {
  const res = await fetch(`${baseUrl}/api/config`);

  if (![200, 201].includes(res.status)) {
    return { selectionPhase: false };
  }

  return (await res.json()) as ConfigResponse;
};
