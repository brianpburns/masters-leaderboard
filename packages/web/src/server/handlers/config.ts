import asyncHandler from 'express-async-handler';

export function getConfig() {
  return asyncHandler(async (_req, res) => {
    const selectionPhase = process.env.SELECTION_PHASE === 'true' ?? false;

    console.log('selectionPhase', selectionPhase);

    res.status(200).send({ selectionPhase });
  });
}
