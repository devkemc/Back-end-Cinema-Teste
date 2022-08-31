import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../../repositories/MoviesRepositories"
import { KindRepositories } from "../../repositories/KindRepositories";

interface IMovieRequest {
    name: string;
    sinopse: string;
    id_kind: string;
    release_date_of: number;
}

 class CreateMovieService {
    async execute({ name, sinopse, id_kind, release_date_of}: IMovieRequest) {
     
        const movieRepository = getCustomRepository(MoviesRepositories);
   
      if (!name) {
        throw new Error("Nome obrigatorio!");
      }
      if (!sinopse) {
        throw new Error("Titulo obrigatorio");
      }
      if (!id_kind) {
        throw new Error("Genero Obrigatoria!");
      }
      if (!release_date_of) {
        throw new Error("Lançamento obrigatorio!");
      }
      
      const kindRepository = getCustomRepository(KindRepositories);
      const kindAlreadyExixsts = await kindRepository.findOne({
          name:id_kind,
      })
      if(kindAlreadyExixsts){
          id_kind = kindAlreadyExixsts.id;
      }else{
        throw new Error("Genero nao cadastrado");
      }
     

      const movie = movieRepository.create({
        name,
        sinopse,
        id_kind,
        release_date_of
      });
      await movieRepository.save(movie);

      return movie;
    }
}
  export { CreateMovieService };