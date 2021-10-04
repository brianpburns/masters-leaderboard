import * as express from 'express';
import * as path from 'path';
import { Pool } from 'pg';

const ssl =
  process.env.NODE_ENV !== 'production' ? { rejectUnauthorized: false } : false;

const connString =
  'postgres://tuihxjmbvlvduc:93da453319b7b85a45bc90bdff6509d5497b57cf1e4ff28fe7b12152a0fbfafe@ec2-34-194-123-31.compute-1.amazonaws.com:5432/dd1q744c8o4npr';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || connString,
  ssl,
});

pool.connect();

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_req, res) => {
  pool.connect((err) => {
    if (err) res.send('Could not connect to DB: ' + err);

    pool.query('SELECT * FROM team', function (err, result) {
      if (err) return res.send(err);

      res.send(result.rows);
    });
  });

  // res.sendFile(path.resolve(path.join(__dirname, 'public'), 'heroku.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});

export {};
