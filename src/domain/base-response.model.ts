import { InternalError } from './error.model';

export class BaseResponse {
  constructor(errors?: InternalError[]) {
    if (!!errors && errors.length > 0) {
      this._embedded = {};
      this._embedded.errors = errors;
    }
  }

  _embedded?: any;

  setErrors(err: InternalError[]) {
    if (!this._embedded) {
      this._embedded = {};
    }
    this._embedded.errors = !!this._embedded.errors ? this._embedded.errors.concat(err) : err;
    ;
  }
}
