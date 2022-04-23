export default interface IResponse<T> {
  content: T
  errors: string[]
  statusCode: number
}
