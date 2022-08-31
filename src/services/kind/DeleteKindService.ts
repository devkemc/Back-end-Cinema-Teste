import { getCustomRepository } from "typeorm";
import { KindRepositories } from "../../repositories/KindRepositories";

interface IKindDelete {
    id: string;
}
class DeleteKindService {
  async execute({id}:IKindDelete) {

      const kindRepository = getCustomRepository(KindRepositories);

      const kindAlreadyExists = await kindRepository.findOne({
        id,
      });

      if (!kindAlreadyExists) {
          throw new Error("Genero não cadastrado");
      }

      return await kindRepository.delete(id)
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

export { DeleteKindService };