export function Lobby (): JSX.Element {
	return (
		<form action="/game">
			<fieldset>
				<legend>Player 1</legend>
				<label htmlFor="player1-name">
					<div>Name</div>
					<input id="player1-name" name="player1-name" type="text" value="Player 1" />
				</label>
				<label htmlFor="player1-color">
					<div>Name</div>
					<input id="player1-color" name="player1-color" type="color" value="#b22222" />
				</label>
			</fieldset>

			<fieldset>
				<legend>Player 2</legend>
				<label htmlFor="player2-name">
					<div>Name</div>
					<input id="player2-name" name="player2-name" type="text" value="Player 2" />
				</label>
				<label htmlFor="player2-color">
					<div>Name</div>
					<input id="player2-color" name="player2-color" type="color" value="#228b22" />
				</label>
			</fieldset>

			<button type="submit">Start Game</button>
		</form>
	);
}

export default Lobby;
