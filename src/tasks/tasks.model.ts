import * as mongoose from 'mongoose';

export const TasksSchema = new mongoose.Schema({
  group: { type: String, required: true },
  priortity: {
    type: String,
    enum: ['Low', 'Medium', 'Higth', 'Normal'],
    required: true,
  },
  star: { type: Boolean, required: true },
  status: { type: String, enum: ['Start', 'Pause', 'Status'], required: true },
  description: { type: String, required: false },
  title: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
});

export interface ITasks {
  id?: string;
  group: string;
  priority: string;
  star: boolean;
  status: string;
  description: string;
  title: string;
  user_id: string;
}
