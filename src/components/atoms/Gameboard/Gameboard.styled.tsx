import styled from "styled-components";

export const Gameboard = styled.div<{ columnCount: number }>`
	background-image: radial-gradient(black 0.5rem, transparent 0.5rem);
	background-origin: content-box;
	background-position: -50% -50%;
	background-size: 25% 25%;

	display: grid;
	grid: auto-flow / repeat(${({ columnCount }) => columnCount}, 1fr);
	overflow: hidden;
	padding: 0.75rem;
	position: relative;
	z-index: 0;
`;
