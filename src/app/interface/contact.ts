import {Invoice} from './invoice';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  telephone: string;
  email: string;
  address: string;
  ville: string;
  pays: string;
  zip: string;
  invoices: Array<number> | Array<Invoice>;
  quote: Array<number>;
  opportunity: Array<number>;
}
