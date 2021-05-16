export class Address {
  constructor(
    lineOne: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    lineTwo?: string,
  ) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.city = city;
    this.region = region;
    this.postalCode = postalCode;
    this.country = country;
  }

  lineOne: string;
  lineTwo?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}