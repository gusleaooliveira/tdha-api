import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}
