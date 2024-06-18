import { useState } from 'react';
import { Popup } from '../components';

const API_KEY = import.meta.env.VITE_API_KEY;

export const Contact = () => {
  const [response, setResponse] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const showPopup = data => {
    setResponse(data);
    setIsPopupVisible(true);
    const timer = setTimeout(() => {
      setIsPopupVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

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
      const responseData = await fetch('https://email-api-34x5.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          api_key: API_KEY,
        },
        body: JSON.stringify(formData),
      });

      if (responseData.status === 200) {
        const data = await responseData.json();
        document.getElementById('ContactForm').reset();
        showPopup(data);
      } else {
        const error = await responseData.json();
        showPopup(error);
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
    }
  };

  return (
    <section id="Contact">
      <div>
        <p className="ContactTitle">Enviar un</p>
        <p className="ContactTitle">mensaje!</p>
      </div>

      <form id="ContactForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="ContactLabel">
          Nombre:
          <input
            placeholder="John Doe"
            className="ContactInput"
            type="text"
            id="name"
            name="name"
            maxLength={40}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email" className="ContactLabel">
          Correo:
          <input
            placeholder="johndoe@email.com"
            className="ContactInput"
            type="email"
            id="email"
            name="email"
            maxLength={50}
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message" className="ContactLabel">
          Mensaje:
          <textarea
            className="ContactTextarea"
            placeholder="Hola..."
            name="message"
            id="message"
            cols="20"
            rows="10"
            maxLength={200}
            required
            onChange={handleChange}
          />
        </label>

        <label className="ContactLabel">
          <input type="submit" value="Enviar →" className="ContactSubmit" />
        </label>
      </form>
      {isPopupVisible && <Popup response={response} />}
    </section>
  );
};
