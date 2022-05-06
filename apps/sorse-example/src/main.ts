import {
	Box,
	Circle,
	Collision,
	event,
	initSorse,
	Position,
	Rect,
	RoundedRect,
	SorseClickType,
	SorseScene,
	SorseSprite,
	Player,
	
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
				color: "red",
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
		//this.position = new Position(200, 200);
		const player = new Player("./sound.mp3")
		const player2 = new Player("./more-sound.mp3")
		player.play()
		setTimeout(() => {
			player.pause()
			//player2.play()
		}, 1000)
		setTimeout(() => {
			player.play()
		}, 1000)
		// this.shapes.push(
		// 	new RoundedRect({
		// 	color: "blue",
		// 	position: new Position(50, 50),
		// 	height: 100,
		// 	width: 100,
		// 	radius: 10,
		// }),
		// )
		
	}

	onKeyDown(key: string): void {
		console.log("You pressed: ", key);
	}
}

class AnotherSprite extends SorseSprite {
	onInit() {
		this.position = new Position(0, 0);
		this.collision = new Collision([
			new Box(new Position(0, 0), new Position(100, 100)),
		]);
		this.setState("test", "red");
		this.shapes = [
			new RoundedRect({
				color: this.getState("test")!,
				position: new Position(0, 0),
				height: 100,
				width: 100,
				radius: 10,
			}),
		];
		setTimeout(() => {
			this.setState("test", "blue");
		}, 1000)
		this.visible = false
	}

	onClick(pos: Position, type: SorseClickType): void {
		//this.setState("test", "blue");
		this.shapes[0] = (new RoundedRect({
			color: "blue",
			position: new Position(500, 500),
			height: 100,
			width: 100,
			radius: 10,
		}))
	}
}



class MyScene extends SorseScene {
	public onInit(): void {
		this.sprites = [new MySprite(), new AnotherSprite()];
		//this.sceneBackground = 
		
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}

	@event("keyDown")
	key(): void {
		console.log("Current value:", this.getState("value"));
		this.setState("value", Math.random());
	}
}

initSorse({
	author: "Wave-studio",
	name: "Test App",
	version: "1.0.0",
	scenes: [new MyScene()],
});
