import {
	initSorse,
	SorseScene,
	SorseSprite,
	Rect,
	Position,
	Circle,
} from "sorse";
import "./styles.css";

class MySprite extends SorseSprite {
	onInit() {
		console.log("beans")
		this.position = new Position(100, 100);
		this.shapes = [
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
}

initSorse({
	author: "Wave-studio",
	name: "Test App",
	version: "1.0.0",
	scenes: [new MyScene()],
});
