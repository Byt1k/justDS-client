import {mailOptions, transporter} from "@/utils/nodemailer";
import {ContactForm} from "@/types";
import * as express from 'express'

const handler: express.RequestHandler<Record<string, any>, any, ContactForm, any> = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Давайте начнем проект вместе!",
                html: `
                    <h3>Описание проекта</h3>
                    <p>${data.values.project}</p>
                    <p><b>Номер телефона</b> ${data.values.tel}</p>
                `
            })
            return res.status(200).json({success: true})
        } catch (e: any) {
            console.log(e)
            return res.status(400).json({message: e.message})
        }
    }
    return res.status(400).json({message: 'Bad request'})
}

export default handler