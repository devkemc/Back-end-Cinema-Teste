import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../../repositories/MoviesRepositories";
import { classToPlain } from "class-transformer";
interface IListMovieReleaseService {
    release_date_of: string;
}
class ListMovieReleaseService {
    async execute({release_date_of}:IListMovieReleaseService) {
        
        const movieRepostory = getCustomRepository(MoviesRepositories);
        const movie = await movieRepostory.find({
            release_date_of,
        });

        if (!movie) {
            throw new Error("Não existe filmes com esse ano de lançamento!");
        }

        return classToPlain(movie);
           
    }
}

export { ListMovieReleaseService };