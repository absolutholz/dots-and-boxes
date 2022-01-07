import { useContext, useEffect } from 'react';

import Gameboard from '../components/atoms/Gameboard';
import Scoreboard from '../components/atoms/Scoreboard';
import { GameContext } from '../context/GameContext';
import GameAction from '../enums/GameAction';

export function Game (): JSX.Element {
	const { dispatch } = useContext(GameContext);

	useEffect(() => {
		dispatch({
			type: GameAction.SetPlayers,
			players: [
				{
					uid: 'sdfasd9f78a9s8dfadsf',
					displayName: 'Player 1',
					color: 'red',
				},
				{
					uid: '98vf89vnewnwekdsjdls',
					displayName: 'Player 2',
					color: 'blue',
				},
			],
		});

		dispatch({
			type: GameAction.CreateGameboard,
			rowCount: 4,
			columnCount: 4,
		});

	}, [ dispatch ]);

	return (
		<div>
			<div>
				<Gameboard columnCount={ 4 } rowCount={ 4 } />
			</div>
			<div>
				<Scoreboard />
			</div>
		</div>
	);
}

export default Game;
