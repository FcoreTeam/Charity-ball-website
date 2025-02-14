import MailService from '../service/mail-service.js';
import dotenv from 'dotenv';

dotenv.config();


export class MailController {    
    static async send_email(req, res) {
            try {
                const {help, initials, phone, telegram, people, rental} = req.body;
                await MailService.sendMailToMarry(help, initials, phone, telegram, people, rental);
                return res.json({success: true, message: 'Письмо для подтверждения отправлено на почту'});
            } catch (err) {
                console.error(err);
                return res.json({success: false, error: 'Error while activating user'});
            }
    }
}