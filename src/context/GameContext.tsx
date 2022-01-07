import React, { createContext, useReducer } from 'react';
import GameAction from '../enums/GameAction';

export interface IPlayer {
	displayName: string;
	color: string;
	uid: string;
}

// interface IBorder {
// 	[indexer: string]: boolean;
// }

export interface ISquare {
	id: string;
	columnIndex: number;
	rowIndex: number;
	borders: {
		[key: string]: boolean;
	};
	player?: IPlayer;
}

type State = {
	players: IPlayer[] | [];
	currentPlayer?: IPlayer;
	nextPlayer?: IPlayer;
	squares: ISquare[] | [];
}

type Action =
 | { type: GameAction.CreateGameboard, rowCount: number, columnCount: number }
 | { type: GameAction.SetPlayers, players: IPlayer[] }
 | { type: GameAction.ConnectDots, startRowID: number, startColumnID: number, endRowID: number, endColumnID: number,
};

function reducer(state: State, action: Action): State {
	let currentPlayer;
	let nextPlayer;

	switch (action.type) {
		case GameAction.CreateGameboard:
			const squares = [];
			for (let iRow = 0, lRow = action.rowCount; iRow < lRow; iRow++) {
				for (let iCol = 0, lCol = action.columnCount; iCol < lCol; iCol++) {
					squares.push({
						id: `${ iRow }x${ iCol }`,
						columnIndex: iCol,
						rowIndex: iRow,
						borders: {
							[`${ iRow }x${ iCol }|${ iRow }x${ iCol + 1 }`]: false, // top
							[`${ iRow }x${ iCol }|${ iRow + 1 }x${ iCol }`]: false, // left
							[`${ iRow }x${ iCol + 1 }|${ iRow + 1 }x${ iCol + 1 }`]: false, // right
							[`${ iRow + 1 }x${ iCol }|${ iRow + 1 }x${ iCol + 1 }`]: false, // bottom
						},
					});
				}
			}

			return {
				...state,
				squares,
			};

		case GameAction.SetPlayers:
			const players = action.players;
			currentPlayer = players[0];
			nextPlayer = players[1];

			return {
				...state,
				players,
				currentPlayer,
				nextPlayer,
			};

		case GameAction.ConnectDots:
			console.log({state, action});

			const { startRowID, startColumnID, endRowID, endColumnID } = action;
			let borderMatchCount = 0;
			let isSquareComplete = false;

			for (const square of state.squares) {
				const borderID = `${ startRowID }x${ startColumnID }|${ endRowID }x${ endColumnID }`;
				if (square.borders[borderID] !== undefined) {
					square.borders[borderID] = true;

					isSquareComplete = Object.values(square.borders).every(value => value === true);
					if (isSquareComplete) {
						square.player = state.currentPlayer;
					}

					borderMatchCount =+ 1;
					if (borderMatchCount > 1 || startRowID === 0 || startColumnID === 0) {
						break;
					}
				}
			}

			// console.log({borderedSquares, clonedSquares});

			if (!isSquareComplete) {
				const newCurrentIndex = state.players?.findIndex((player) => player === state.nextPlayer);
				currentPlayer = state.players[ newCurrentIndex ];
				nextPlayer = state.players[ newCurrentIndex + 1 < state.players.length ? newCurrentIndex + 1 : 0 ];

				console.log({
					...state,
					currentPlayer,
					nextPlayer,
				});

				return {
					...state,
					currentPlayer,
					nextPlayer,
				};
			}

			return state;

		default:
			return state;
	}
}

interface IGameContext {
	players?: IPlayer[];
	currentPlayer?: IPlayer;
	nextPlayer?: IPlayer;
	squares?: ISquare[];
	dispatch: React.Dispatch<Action>;
}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export function GameProvider ({ children }: { children: React.ReactNode }): JSX.Element {
	const [{
		players,
		currentPlayer,
		nextPlayer,
		squares,
		}, dispatch] = useReducer(reducer, { players: [], squares: [] });

	return (
		<GameContext.Provider value={{ players, currentPlayer, nextPlayer, squares, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;
