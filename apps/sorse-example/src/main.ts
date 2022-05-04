import {
	Circle,
	Position,
	Rect,
	SorseScene,
	SorseSprite,
	initSorse,
	event,
	RoundedRect,
	Collision,
	Box,
	SorseClickType,
} from "sorse";
import "./styles.css";

class MySprite extends SorseSprite {
	onInit() {
		this.position = new Position(100, 100);
		this.collision = new Collision([
			new Box(new Position(0, 0), new Position(100, 100)),
		]);
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
				height: 100,
				width: 100,
				color: "green",
			}),
			new Circle({
				position: new Position(300, 300),
				radius: 100,
				color: "blue",
			}),
		];
	}

	onClick(pos: Position, type: SorseClickType): void {
		console.log("You clicked at: ", pos, "With:", type);
	}

	onKeyDown(key: string): void {
		console.log("You pressed: ", key);
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
