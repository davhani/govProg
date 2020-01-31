import "babel-polyfill";
import database from "./database";

export const select = table => (req, res, next) => {
  database.query(`SELECT * FROM ${table}`, (error, results) => {
    if (error) return next(error);
    res.send(results);
  });
};

export const insert = table => async (req, res, next) => {
  await insertQuery(table, req.body);
  res.send({});
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

const questionMark = object => {
  const n = Object.keys(object).length;
  const string = "?,";

  const output = string.repeat(n);
  return output.substring(0, output.length - 1);
};

async function insertQuery(table, object) {
  return new Promise((resolve, reject) => {
    database.query(
      `INSERT INTO ${table} (${Object.keys(object)}) VALUES (${questionMark(
        object
      )})`,
      [...Object.values(object)],
      (error, results) => {
        if (error) reject(error);
        resolve({ error, results });
      }
    );
  });
}

export const createEffort = async (req, res, next) => {
  const { criminal, cases, effort } = req.body;

  try {
    const insertedCriminal = await insertQuery("criminals", criminal);
    await cases.map(_case =>
      insertQuery("cases", {
        ..._case,
        criminalId: insertedCriminal.results.insertId
      })
    );
    await insertQuery("effort", {
      ...effort,
      criminalId: insertedCriminal.results.insertId
    });
    res.send({ success: true, error: false });
  } catch (error) {
    next(error);
  }
};
