import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { KindRepositories } from "../../repositories/KindRepositories";

class ListKindService {
    async execute(){
        const kindRepositories = getCustomRepository(KindRepositories);

        const kind = await kindRepositories.find();

        return classToPlain(kind);
    }
}

export { ListKindService };