import asyncHandler from 'express-async-handler';

export function getConfig() {
  return asyncHandler(async (_req, res) => {
    res.status(200).send({ selectionPhase: process.env.SELECTION_PHASE ?? false });
  });
}
