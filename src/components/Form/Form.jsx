// import { useState } from 'react';
// import { ContactButton } from '../';

export const Form = () => <div></div>;

// const ContactForm = () => {
// 	const [formData, setFormData] = useState({
// 		fullName: '',
// 		email: '',
// 		message: '',
// 	});

// 	const handleChange = e => {
// 		const { name, value } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = async e => {
// 		e.preventDefault();
// 		try {
// 			await fetch('https://testpocho.free.beeceptor.com', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(formData),
// 			})
// 				.then(res => {
// 					if (res.status === 200) console.log('Form fetched successfuly');
// 				})
// 				.catch(err => {
// 					console.log('Error fetching form:', err);
// 				});
// 		} catch (err) {
// 			console.error('Error submitting form:', err);
// 		}
// 	};

// 	return (
// 		<div>
// 			<p>Get in touch</p>
// 			<hr />
// 			<form action='' id='contactForm' onSubmit={handleSubmit}>
// 				<label htmlFor='firstName'>
// 					First name:
// 					<input
// 						type='text'
// 						id='firstName'
// 						name='firstName'
// 						maxLength={40}
// 						required
// 						onChange={handleChange}
// 					/>
// 				</label>

// 				<label htmlFor='lastName'>
// 					Last name:
// 					<input
// 						type='text'
// 						id='lastName'
// 						name='lastName'
// 						maxLength={40}
// 						required
// 						onChange={handleChange}
// 					/>
// 				</label>

// 				<label htmlFor='email'>
// 					Email:
// 					<input
// 						type='email'
// 						id='email'
// 						name='email'
// 						maxLength={50}
// 						required
// 						onChange={handleChange}
// 					/>
// 				</label>

// 				<label htmlFor='message'>
// 					Message:
// 					<textarea
// 						name='message'
// 						id='message'
// 						cols='30'
// 						rows='10'
// 						maxLength={200}
// 						required
// 						onChange={handleChange}
// 					/>
// 				</label>

// 				<ContactButton />
// 			</form>
// 		</div>
// 	);
// };
