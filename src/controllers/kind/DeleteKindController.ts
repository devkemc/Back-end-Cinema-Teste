import { Request, Response } from "express";
import { DeleteKindService } from "../../services/kind/DeleteKindService";

class DeleteKindController {
  async handle(request: Request, response: Response) {
    const deleteKindService = new DeleteKindService();
    const id= request.params.id;
    const kind = await deleteKindService.execute({id});

    return response.json(kind);
  }
}

export { DeleteKindController };