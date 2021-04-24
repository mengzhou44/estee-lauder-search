import React from 'react';
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/global-style';
import App from './components/App'

ReactDOM.render(<React.StrictMode>
    <GlobalStyle />
    <App />
</React.StrictMode>, document.getElementById('root'))

