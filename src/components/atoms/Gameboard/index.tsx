import { useContext } from 'react';

import { IGameboardProps } from './IGameboard';
import * as S from './Gameboard.styled';
import GameboardSquare from '../GameboardSquare';
import GameContext from '../../../context/GameContext';

export function Gameboard ({ columnCount, rowCount, ...props }: IGameboardProps): JSX.Element {
	// const columnArray = Array.from({ length: columnCount });
	// const rowArray = Array.from({ length: rowCount });

	const { squares } = useContext(GameContext);

	return (
		<S.Gameboard columnCount={ columnCount } {...props}>
			{/* { rowArray.map((row, rowIndex) => (
				columnArray.map((col, columnIndex) => ( */
					squares && squares.map(square => {
						const { rowIndex, columnIndex } = square;

						return (
							<GameboardSquare
								square={ square }
								isLastRowInColumn={ rowIndex + 1 === rowCount }
								isLastColumnInRow={ columnIndex + 1 === columnCount }
								key={ `${rowIndex}x${columnIndex}` }
							/>
						)
					})}
				{/* ))
			))} */}
		</S.Gameboard>
	)
};

export default Gameboard;
