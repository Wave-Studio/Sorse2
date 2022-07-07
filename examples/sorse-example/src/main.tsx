import { Container, Sorse } from "sorse";
import "./style.css"

Sorse.init({
	author: "Lukas",
	canvas: {
		nativeSize: {
			height: window.innerHeight,
			width: window.innerWidth
		},
	},
	name: "test",
	version: "100000",
	component: () => {
		return (
			<>
				<Container>
					
				</Container>
			</>
		)
	}
})