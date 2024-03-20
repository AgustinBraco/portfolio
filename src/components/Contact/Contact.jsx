import { useState } from 'react';

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const apiKey = '';

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const payload = {
				sender: { email: formData.email },
				to: [{ email: 'bracoagustin@gmail.com' }],
				subject: 'Contacto web',
				htmlContent: `<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>`,
			};
	
			await fetch('https://api.brevo.com/v3/smtp/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'api-key': apiKey,
				},
				body: JSON.stringify(payload),
			})
				.then(res => {
					console.log("res:", res)
					if (res.status === 200) {
						document.getElementById('ContactForm').reset();
						alert('Gracias por tu mensaje!');
					}
				})
				.catch(err => {
					console.log('Error fetching form:', err);
				});
		} catch (err) {
			console.error('Error submitting form:', err);
		}
	};

	// const handleSubmit = async e => {
	// 	e.preventDefault();
	// 	try {
	// 		await fetch('https://testpocho.free.beeceptor.com', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(formData),
	// 		})
	// 			.then(res => {
	// 				if (res.status === 200) {
	// 					document.getElementById('ContactForm').reset();
	// 					alert('Gracias por tu mensaje!');
	// 				}
	// 			})
	// 			.catch(err => {
	// 				console.log('Error fetching form:', err);
	// 			});
	// 	} catch (err) {
	// 		console.error('Error submitting form:', err);
	// 	}
	// };

	return (
		<section className='Contact'>
			<div>
				<p className='ContactTitle'>Enviar un</p>
				<p className='ContactTitle'>mensaje!</p>
			</div>

			<form id='ContactForm' className='ContactForm' onSubmit={handleSubmit}>
				<label htmlFor='name' className='ContactLabel'>
					Nombre:
					<input
						placeholder='John Doe'
						className='ContactInput'
						type='text'
						id='name'
						name='name'
						maxLength={40}
						required
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='email' className='ContactLabel'>
					Correo:
					<input
						placeholder='johndoe@email.com'
						className='ContactInput'
						type='email'
						id='email'
						name='email'
						maxLength={50}
						required
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='message' className='ContactLabel'>
					Mensaje:
					<textarea
						className='ContactTextarea'
						name='message'
						id='message'
						cols='30'
						rows='10'
						maxLength={200}
						required
						onChange={handleChange}
					/>
				</label>

				<div className='Button'>
					<input type='submit' value='Enviar' className='ContactSubmit' />
					<div className='Arrow'></div>
				</div>
			</form>
		</section>
	);
};
