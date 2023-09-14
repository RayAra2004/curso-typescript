import { connection } from "../database/connection";
import { Game } from "../protocols/game-protocol";

const games: Game[] = [];

async function getGames() {
  return await connection.query(`SELECT * FROM games;`);
}

async function createGame(game: Game) {
  await connection.query(`INSERT INTO games(title, platform) VALUES ($1, $2);`, [game.title, game.platform])
}

async function getGameByTitleAndPlatform(game: Game) {
  return await connection.query(`SELECT * FROM games WHERE title = $1;`, [game.title])
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;