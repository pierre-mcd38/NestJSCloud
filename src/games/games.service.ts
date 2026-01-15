import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GamesService {

  private filePath = path.join(__dirname, '../../games.json');

  private readData() {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  private writeData(data: any) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll() {
    return this.readData();
  }

  findOne(id: number) {
    const games = this.readData();
    return games.find(game => game.id === id);
  }

  create(game: any) {
    const games = this.readData();
    game.id = Date.now();
    games.push(game);
    this.writeData(games);
    return game;
  }

  update(id: number, updatedGame: any) {
    const games = this.readData();
    const index = games.findIndex(game => game.id === id);
    if (index === -1) return null;

    games[index] = { ...games[index], ...updatedGame };
    this.writeData(games);
    return games[index];
  }

  delete(id: number) {
    const games = this.readData();
    const filtered = games.filter(game => game.id !== id);
    this.writeData(filtered);
    return { message: 'Game deleted' };
  }
}
