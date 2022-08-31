import { Request, Response } from "express";
import { CreateKindService } from "../../services/kind/CreateKindService";

class CreateKindController{
    async handle(request: Request, response: Response){
        const {name} = request.body;
        
        const createKindService = new CreateKindService();

        const kind = await createKindService.execute({
            name
        });

        return response.json(kind);
    }
}

export { CreateKindController };