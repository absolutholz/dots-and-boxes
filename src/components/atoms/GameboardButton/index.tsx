import { useContext, useEffect, useState } from "react";

import GameContext from "../../../context/GameContext";

import { IGameboardButtonProps } from "./IGameboardButton";
import * as S from './GameboardButton.styled';
import GameAction from "../../../enums/GameAction";

export function GameboardButton ({ startRowID, startColumnID, endRowID, endColumnID, ...props }: IGameboardButtonProps): JSX.Element {
	const [ isDisabled, setIsDisabled ] = useState(false);
	const [ color, setColor ] = useState('');
	const { currentPlayer, dispatch } = useContext(GameContext);

	const handleButtonClick = (): void => {
		if (currentPlayer) {
			setColor(currentPlayer.color);
			setIsDisabled(true);
			dispatch({
				type: GameAction.ConnectDots,
				startRowID,
				startColumnID,
				endRowID,
				endColumnID,
			});
		}
	};

	useEffect(() => {
		setIsDisabled(false);
	}, []);

	return (
		<S.GameboardButton
			disabled={ isDisabled }
			id={ `${ startRowID }x${ startColumnID }|${ endRowID }x${ endColumnID }` }
			onClick={ handleButtonClick }
			type='button'
			color={ color }
			{...props}
		/>
	);
};

export default GameboardButton;
