import {
	Circle,
	Position,
	Rect,
	SorseScene,
	SorseSprite,
	initSorse,
	event,
	RoundedRect,
} from "sorse";
import "./styles.css";

class MySprite extends SorseSprite {
	onInit() {
		this.position = new Position(100, 100);
		this.shapes = [
			new RoundedRect({
				color: "purple",
				position: new Position(100, 100),
				height: 100,
				width: 100,
				radius: 10,
			}),
			new Rect({
				position: new Position(0, 0),
				height: 150,
				width: 100,
				color: "red",
			}),
			new Circle({
				position: new Position(300, 300),
				radius: 100,
				color: "blue",
			}),
		];
	}
}

class MyScene extends SorseScene {
	public onInit(): void {
		this.sprites = [new MySprite()];
	}

	@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

initSorse({
	author: "Wave-studio",
	name: "Test App",
	version: "1.0.0",
	scenes: [new MyScene()],
});
