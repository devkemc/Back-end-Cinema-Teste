import { getCustomRepository } from "typeorm";
import { KindRepositories } from "../../repositories/KindRepositories";

interface IKindRequest {
    name: string;
 }

 class CreateKindService {
    async execute({ name }: IKindRequest) {

     
      const kindRepository = getCustomRepository(KindRepositories);
   
      if (!name) {
        throw new Error("Nome Obrigatorio!");
      }
      
  
      const kindAlreadyExists = await kindRepository.findOne({
          name,
      });

      if (kindAlreadyExists) {
        throw new Error("Categoria ja existe!");
      }

      
  
      const kind = kindRepository.create({
        name
      });
      await kindRepository.save(kind);

      return kind;
    }
  }
  export { CreateKindService };