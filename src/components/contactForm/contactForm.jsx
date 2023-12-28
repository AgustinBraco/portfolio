import './contactForm.scss';
import { ContactButton } from '../';
import { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		fullName: '',
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

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await fetch('https://testpocho.free.beeceptor.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then(res => {
					if (res.status === 200) console.log('Form fetched successfuly');
				})
				.catch(err => {
					console.log('Error fetching form:', err);
				});
		} catch (err) {
			console.error('Error submitting form:', err);
		}
	};

	return (
		<div className='formContainer'>
			<form action='' id='contactForm' onSubmit={handleSubmit}>
				<label htmlFor='fullName'>
					Full name:
					<input
						type='text'
						id='fullName'
						name='fullName'
						maxLength={40}
						required
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='email'>
					Email:
					<input
						type='email'
						id='email'
						name='email'
						maxLength={50}
						required
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='message'>
					Message:
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						maxLength={200}
						required
						onChange={handleChange}
					/>
				</label>

				<ContactButton />
			</form>
		</div>
	);
};

export default ContactForm;
