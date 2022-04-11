declare namespace Express {
  export interface Request {
    io: Server,
    user: {
      id: string;
    }
  }
}