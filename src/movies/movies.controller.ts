import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

interface MovieData {
  name: string;
  stars: number;
}
@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'this return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This movie id : ${movieId}`;
  }

  @Post()
  create(@Body() movieData: MovieData) {
    console.log(movieData);
    const name: string = movieData.name;
    console.log(name);
    return `Movie's create`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return `Delete movie id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() movieData) {
    return {
      movieId: movieId,
      ...movieData,
    };
  }
}
