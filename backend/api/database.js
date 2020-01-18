import mysql from "mysql";

const database = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "ncpd"
});

database.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log(
    "successfully connected to the database on port: " +
      database.config.port +
      " on thread " +
      database.threadId
  );
});

export default database;
