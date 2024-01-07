import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from './global/context.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CustomProvider>
			<App />
		</CustomProvider>
	</React.StrictMode>,
);
