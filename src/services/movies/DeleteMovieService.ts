import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../../repositories/MoviesRepositories";

interface IMovieDelete {
    id: string;
}
class DeleteMovieService {
  async execute({id}:IMovieDelete) {

      const movieRepository = getCustomRepository(MoviesRepositories);

      const movieAlreadyExists = await movieRepository.findOne({
        id,
      });

      if (!movieAlreadyExists) {
          throw new Error("filme não cadastrado");
      }

      return await movieRepository.delete(id)
            .then(f => {
                console.log(f);
                var messagmsgeDelete = {
                  message:"Registro excluido com sucesso"
                }
            
                return messagmsgeDelete;
                
            }, err => {
              throw new Error("Erro na exclusão");
            });
           
  }
}

export { DeleteMovieService };
