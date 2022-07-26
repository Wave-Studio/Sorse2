import { Container, Sorse, ShapeReturn } from "sorse";
import "./style.css";
import Start from "./pages/start";
import Error from "./pages/error";

Sorse.init({
	canvas: {
		nativeSize: {
			height: window.innerHeight,
			width: window.innerWidth,
		},
	},
	component: game
});

function game(): ShapeReturn {
	return (
		<>
			<Container visible={false}>
				<Start />
			</Container>
			<Container visible={true}>
				<Error />
			</Container>
		</>
	);
}