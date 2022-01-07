import { ISquare } from "../../../context/GameContext";

export interface IGameboardSquareProps {
	square: ISquare;
	isLastRowInColumn: boolean;
	isLastColumnInRow: boolean;
}
