import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { MailController } from './controller/mail.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = [
  process.env.CLIENT_URL,
];

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT}!`);
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors({
  origin: allowedOrigins, // разрешить запросы с этого домена
  credentials: true // разрешить запросы с учетными данными
}));

app.post('/send_mail', MailController.send_email)