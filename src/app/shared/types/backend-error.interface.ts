export interface BackendErrorInterface {
  message: string | Array<string>;
  error?: string;
  statusCode: number;
}
