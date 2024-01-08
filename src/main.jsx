import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from './global/context.jsx';
import App from './App.jsx';

const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CustomProvider>
			<App />
		</CustomProvider>
	</React.StrictMode>,
);
