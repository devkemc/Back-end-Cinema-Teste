import { Request, Response } from "express";
import { ListKindService } from "../../services/kind/ListKindService";

class ListKindController {
  async handle(request: Request, response: Response) {
    const listKindService = new ListKindService();

    const kind = await listKindService.execute();

    return response.json(kind);
  }
}

export { ListKindController };