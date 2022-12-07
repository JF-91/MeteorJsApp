import { Mongo } from 'meteor/mongo';

export interface FormApp {
  _id?: string;
  name: string;
  lastName: string;
  email: string;
  info: string;
  createdAt: Date;
}

export const FormCollection = new Mongo.Collection<FormApp>('work');
