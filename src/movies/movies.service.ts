import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const result = this.movies.find((movie) => movie.id === id);
    if (!result) throw new NotFoundException(`Movie id:${id} is not found`);
    return result;
  }

  remove(id: number): void {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, movieData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.remove(id);
    return this.movies.push({ ...movie, ...movieData });
  }
}
