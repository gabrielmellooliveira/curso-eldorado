import IResponse from "./IResponse"

export default class Response<T> implements IResponse<T> {
  content!: T;
  errors!: string[];
  statusCode!: number;
}
