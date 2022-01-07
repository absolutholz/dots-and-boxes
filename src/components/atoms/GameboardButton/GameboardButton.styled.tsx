import styled from "styled-components";

export const GameboardButton = styled.button<{ color: string }>`
	height: 100%;
	position: absolute;
	transform: rotate(var(--rotation)) scale(0.7);
	width: 100%;

	&::before {
		content: "";
		display: block;
		background: ${({ color }) => color !== '' ? color : 'black'};
		height: 4px;
		transform: rotate(45deg);
		width: 100%;
	}

	&:active {
		/* background: hsl(0, 100%, 50%, 0.1); */
	}

	&:hover,
	&:focus-visible {
		/* background: hsl(240, 100%, 50%, 0.1); */
	}

	&:disabled {
		&::before {
			height: 8px;
		}
	}
`;
