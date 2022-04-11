import { Server } from "socket.io";
import { injectable } from "tsyringe";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class EventoPaySuccessUseCase {
  async execute(orderId: string, type: string, io: Server): Promise<void> {
    // const repository = new EventosVendasRepositories();

    io.emit(orderId, {
      type
    });

  }
}