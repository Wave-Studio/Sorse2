import {
	Polygon,
	Position,
	Rectangle,
	Sorse,
	Square,
	Text,
	Font,
	useFPS
} from "sorse";

export default function scene(props: { gameStarted: boolean, audioTime: number }) {
	const fps = useFPS();

	return (
		<Rectangle width={1000} height={400} color={props.gameStarted ? "green" : "red"}>
			<Square
				sideLength={100}
				color={"purple"}
				border={{
					width: 20,
					color: "blue",
				}}
				pos={new Position(100, 100)}
			>
				<Polygon
					color={"yellow"}
					points={[
						new Position(0, 0),
						new Position(100, 0),
						new Position(100, 100),
					]}
				/>
			</Square>
			<Text text={props.audioTime.toString()} color={"black"} pos={new Position(100,100)} font={new Font("Oswald", 50)} >

			</Text>
			<Text text={useFPS().toString()} color={"black"} pos={new Position(100,200)} font={new Font("Oswald", 50)} >

			</Text>
		</Rectangle>
	);
}
