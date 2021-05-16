export class BaseResponse {
  constructor(errors: Error[]) {
    this._embedded = {};
    if (!!errors) {
      this._embedded.errors = errors;
    }
  }

  _embedded?: {
    errors?: Error[]
  }
}