export interface IServerError {
  message: string;
  error: { [key: string]: string[] };
}
