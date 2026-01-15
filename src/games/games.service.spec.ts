import { GamesService } from './games.service';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    service = new GamesService();
  });

  it('devrait retourner un tableau de jeux', () => {
    const games = service.findAll();
    expect(Array.isArray(games)).toBe(true);
  });

  it('devrait créer un nouveau jeu', () => {
    const game = service.create({
      title: 'Test Game',
      genre: 'Test',
      platform: 'PC',
      year: 2024,
    });

    expect(game).toHaveProperty('id');
    expect(game.title).toBe('Test Game');
  });

  it('devrait récupérer un jeu par id', () => {
    const game = service.create({
      title: 'Get Game',
      genre: 'Test',
      platform: 'PC',
      year: 2024,
    });

    const found = service.findOne(game.id);
    expect(found).toEqual(game);
  });

  it('devrait mettre à jour un jeu', () => {
    const game = service.create({
      title: 'Old Game',
      genre: 'Test',
      platform: 'PC',
      year: 2020,
    });

    const updated = service.update(game.id, { title: 'New Game' });
    expect(updated.title).toBe('New Game');
  });

  it('devrait supprimer un jeu', () => {
    const game = service.create({
      title: 'Delete Game',
      genre: 'Test',
      platform: 'PC',
      year: 2024,
    });

    const response = service.delete(game.id);
    expect(response).toEqual({ message: 'Game deleted' });

    const found = service.findOne(game.id);
    expect(found).toBeUndefined();
  });
});
