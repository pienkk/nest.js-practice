import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie | boolean {
    const result = this.movies.find((movie) => movie.id === parseInt(id));
    if (result === undefined) return false;
    return result;
  }

  remove(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    if (this.movies[id] !== undefined) return false;
    return true;
  }

  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
