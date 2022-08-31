import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../../repositories/MoviesRepositories";
import { classToPlain } from "class-transformer";

class ListMovieService {
  async execute() {
    const movieRepositories = getCustomRepository(MoviesRepositories);

    const movie = await movieRepositories.find();

    return classToPlain(movie);
  }
}

export { ListMovieService };