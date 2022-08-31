import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../../repositories/MoviesRepositories";
import { classToPlain } from "class-transformer";
import { KindRepositories } from "../../repositories/KindRepositories"
interface IListMovieKindService {
    id_kind: string;
}
class ListMovieKindService {
    async execute({id_kind}:IListMovieKindService) {
        
        const kindRepostory = getCustomRepository(KindRepositories);
        const kind = await kindRepostory.findOne({
            name: id_kind,
        });

        if (kind) {
        
            id_kind = kind.id;
            
        }else{
            throw new Error("Não existe esse genero!");
        }
        
    

        const movieRepository = getCustomRepository(MoviesRepositories);
        const movies = await movieRepository.findOne({
            id_kind,
        });

        if (!movies) {
            throw new Error("Não existe filmes desse genero!");
        }

        return classToPlain(movies);
           
    }
}

export { ListMovieKindService };