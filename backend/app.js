import express from 'express';
import sessionRouter from './router/sessions.js';
import attendanceRouter from './router/attendance.js';
import authRouter from './router/auth.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const MONGO_URI = 'mongodb://mongodb:27017/UoPS';
//const MONGO_URI = 'mongodb://127.0.0.1:27017/UoPS';

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('DB Connected');

    app.use(express.json());
    app.use(cors());
    app.use('/attendance', attendanceRouter);
    app.use('/sessions', sessionRouter);
    app.use('/auth', authRouter);

    app.use((req, res, next) => {
      res.sendStatus(404);
    });
    app.use((error, req, res, next) => {
      console.error(error);
      res.sendStatus(500);
    });

    app.listen(8000, () => {
      console.log('Server listning on port 8080');
    });
  } catch (error) {
    console.error(error);
  }
};

server();
