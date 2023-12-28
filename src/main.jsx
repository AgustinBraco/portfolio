import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CustomProvider } from './global/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CustomProvider>
			<App />
		</CustomProvider>
	</React.StrictMode>,
);
