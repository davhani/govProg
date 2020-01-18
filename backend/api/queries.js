import database from "./database";

export const select = table => (req, res, next) => {
  database.query(`SELECT * FROM ${table}`, (error, results) => {
    if (error) return next(error);
    res.send(results);
  });
};

export const insert = table => (req, res, next) => {
  const questionMark = () => {
    const n = Object.keys(req.body).length;
    const string = "?,";

    const output = string.repeat(n);
    return output.substring(0, output.length - 1);
  };

  database.query(
    `INSERT INTO ${table} (${Object.keys(
      req.body
    )}) VALUES (${questionMark()})`,
    [...Object.values(req.body)],
    (error, results) => {
      if (error) return next(error);
      res.send(results);
    }
  );
};

export const remove = table => (req, res, next) => {
  database.query(
    `DELETE FROM ${table} WHERE id = ${req.body.id}`,
    (error, results) => {
      if (error) return next(error);
      res.send(results);
    }
  );
};

export const getEffort = null;

export const getCriminalCases = (req, res, next) => {
  const response = {};
  database.query(
    `SELECT * FROM cases WHERE cases.criminalId = ${req.params.id}`,
    (error, results) => {
      if (error) return next(error);
      response.cases = results;
      database.query(
        `SELECT * FROM criminals WHERE criminals.id = ${req.params.id}`,
        (error, results) => {
          if (error) return next(error);
          response.criminal = results[0];
          res.send(response);
        }
      );
    }
  );
};
