import { RequestHandler } from 'express';

export const auth = (): RequestHandler => (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    res.locals.token = bearer[1];
    next();
  } else {
    res.sendStatus(403);
  }
};
