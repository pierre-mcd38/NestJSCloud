import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { GamesService } from './games.service';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  // GET /games
  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  // GET /games/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(Number(id));
  }

  // POST /games
  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Elden Ring' },
        genre: { type: 'string', example: 'Action RPG' },
        platform: { type: 'string', example: 'PS5' },
        year: { type: 'number', example: 2022 },
      },
      required: ['title', 'genre', 'platform', 'year'],
    },
  })
  create(@Body() body: any) {
    return this.gamesService.create(body);
  }

  // PUT /games/:id
  @Put(':id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'God of War' },
        genre: { type: 'string', example: 'Action' },
        platform: { type: 'string', example: 'PS5' },
        year: { type: 'number', example: 2023 },
      },
    },
  })
  update(@Param('id') id: string, @Body() body: any) {
    return this.gamesService.update(Number(id), body);
  }

  // DELETE /games/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.gamesService.delete(Number(id));
  }
}
