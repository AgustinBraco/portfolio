import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const resend = new Resend('re_FHvRH3Di_N9V1HpEpb1eeZ9tD5Do8wmBT');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/email', async (req, res) => {
	const { name, email, message } = req.body;

	const { data, error } = await resend.emails.send({
		from: 'Portfolio <onboarding@resend.dev>',
		to: ['bracoagustin@gmail.com'],
		subject: 'Contacto web',
		html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${message}</p>
    `,
	});

	if (error)
		return res.status(400).json({ status: 'Error', message: 'The email was not sent', error });

	return res.status(200).json({ status: 'Success', message: 'Email sent', data });
});

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000');
});
