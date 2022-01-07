import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { GameProvider } from './context/GameContext';

import GlobalStyle from './GlobalStyle';
import { Home, Lobby, Game } from './pages';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<GameProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/game' element={ <Game /> } />
					<Route path='/lobby' element={ <Lobby /> } />
					<Route path='/' element={ <Home /> } />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
