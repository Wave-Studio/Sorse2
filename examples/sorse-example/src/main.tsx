import { Container, Sorse, useState } from "sorse";
import "./style.css";
import Start from "./pages/start";

Sorse.init({
	canvas: {
		nativeSize: {
			height: window.innerHeight,
			width: window.innerWidth,
		},
	},
	component: () => {
		const [stage, setStage] = useState(0);

		return (
			<>
				<Container visible={true}>
					<Start />
				</Container>
			</>
		);
	},
});
