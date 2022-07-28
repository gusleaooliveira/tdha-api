import * as mongoose from 'mongoose';

export const RevenuesSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Salary', 'Freelance', 'Other'],
    required: true,
  },
  date: { type: String, required: true },
  value: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  frequency: { type: String, enum: ['Recurrent', 'Sporadic'], required: true },
});

export interface IRevenues {
  id?: string;
  type: string;
  date: string;
  value: number;
  title: string;
  description?: string;
  user_id: string;
}
