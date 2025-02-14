import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    }

    async sendMailToMarry(help, initials, phone, telegram, people, rental) {
        let mes = '';
        let mes2 = '';
        if(help){
            mes = 'Да';
        } else {
            mes = 'Нет';
        }
        if(rental){
            mes2 = 'Да';
        } else {
            mes2 = 'Нет';
        }

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: 'Заявка на бал',
            text: '',
            html: `
                <div>
                    <h1>Заявка</h1>
                    <p>Телефон: ${phone}</p>
                    <p>Telegram: ${telegram}</p>
                    <p>Кол-во человек: ${people}</p>
                    <p>ФИО: ${initials}</p>
                    <p>Помощь с заселением: ${mes}</p>
                    <p>Прокат платьев: ${mes2}</p>
                </div>
            `
        })
    }
}

export default new MailService();