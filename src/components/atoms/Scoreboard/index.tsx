import { useContext } from 'react';

import GameContext from '../../../context/GameContext';
import { IScoreboardProps } from './IScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard ({ ...props }: IScoreboardProps): JSX.Element {
	const { players, currentPlayer, nextPlayer } = useContext(GameContext);

	return (
		<S.Scoreboard {...props}>
			{ players && players.map((player) => (
				<div key={ `scoreboard-player-${player.uid}` }>
					{ player.displayName }
					{ player === currentPlayer &&
						<span> current</span>
					}
					{ player === nextPlayer &&
						<span> next</span>
					}
				</div>
			))}
		</S.Scoreboard>
	)
};

export default Scoreboard;
