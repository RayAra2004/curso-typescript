import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "raynan",
  database: "games_aula_ts_11"
});

export { connection };