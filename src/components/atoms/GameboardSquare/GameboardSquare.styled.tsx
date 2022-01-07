import styled, { css } from "styled-components";

import GameboardButton from "../GameboardButton";

export const GameboardSquare = styled.div<{
	color?: string;
}>`
	align-items: center;
	aspect-ratio: 1 / 1;
	${({ color }) =>
        css`
            background: ${ color };
        `}
	display: flex;
	justify-content: center;
	position: relative;
`;

export const ButtonTop = styled(GameboardButton)`
	left: 0;
	--rotation: -45deg;
	top: -50%;
`;

export const ButtonLeft = styled(GameboardButton)`
	left: -50%;
	--rotation: 45deg;
	top: 0;
`;

export const ButtonBottom = styled(GameboardButton)`
	bottom: -50%;
	left: 0;
	--rotation: -45deg;
`;

export const ButtonRight = styled(GameboardButton)`
	right: -50%;
	--rotation: 45deg;
	top: 0;
`;
