import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Import app styles
import './styles/styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
