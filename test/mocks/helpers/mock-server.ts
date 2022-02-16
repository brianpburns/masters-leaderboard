import { setupServer } from 'msw/node';

import { handlers } from 'src/client/mock-server/handlers';

export const setupMockServer = () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  return server;
};
