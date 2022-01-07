import * as S from './GameboardSquare.styled';
import { IGameboardSquareProps } from './IGameboardSquare';

export function GameboardSquare ({ square, isLastColumnInRow, isLastRowInColumn, ...props }: IGameboardSquareProps): JSX.Element {
	const { rowIndex, columnIndex } = square;

	return (
		<S.GameboardSquare
			color={ square.player?.color }
			id={ `square-${rowIndex}x${columnIndex}` }
			{...props}
		>
			<S.ButtonLeft
				startRowID={ rowIndex }
				startColumnID={ columnIndex }
				endRowID={ rowIndex + 1 }
				endColumnID={ columnIndex }
			/>
			<S.ButtonTop
				startRowID={ rowIndex }
				startColumnID={ columnIndex }
				endRowID={ rowIndex }
				endColumnID={ columnIndex + 1 }
			/>
			{ isLastColumnInRow &&
				<S.ButtonRight
					startRowID={ rowIndex }
					startColumnID={ columnIndex + 1 }
					endRowID={ rowIndex + 1 }
					endColumnID={ columnIndex + 1 }
				/>
			}
			{ isLastRowInColumn &&
				<S.ButtonBottom
					startRowID={ rowIndex + 1  }
					startColumnID={ columnIndex }
					endRowID={ rowIndex + 1  }
					endColumnID={ columnIndex + 1 }
				/>
			}
			{ square.player &&
				<span>{ square.player.displayName='' }</span>
			}
		</S.GameboardSquare>
	);
}

export default GameboardSquare;
