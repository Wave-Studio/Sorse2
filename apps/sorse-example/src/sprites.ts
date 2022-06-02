import {
	Box,
	Collision,
	Position,
	RoundedRect,
	SorseSprite,
	Sorse,
	Text,
} from "sorse";

// ---
// SPRITES
// ---

export class MySprite extends SorseSprite {
	onInit() {
		this.position = new Position(100, 100);
		this.collision = new Collision([
			new Box(new Position(0, 0), new Position(100, 100)),
		]);
		// Vite decorator bug be like
		// Sorse.on("keyDown", (key: string) => {
		// 	this.onPress.call(this, key);
		// });
	}
	async onClick() {
		// this.shapes.push(
		// 	new RoundedRect({
		// 	color: "blue",
		// 	position: new Position(50, 50),
		// 	height: 100,
		// 	width: 100,
		// 	radius: 10,
		// }),)
	}
	// onKeyDown(key: string): void {
	// 	console.log("You pressed:", key);
	// }
	// onPress(_key: string): void {
	// 	console.log("toggling visibility");
	// 	this.visible = !this.visible;
	// }
}

export class AnotherSprite extends SorseSprite {
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
		}, 1000);
	}

	onClick(): void {
		//this.setState("test", "blue");
		this.shapes[0] = new RoundedRect({
			color: "blue",
			position: new Position(500, 500),
			height: 100,
			width: 100,
			radius: 10,
		});
	}
}

export class StartButton extends SorseSprite {
	public onInit(): void {
		console.log(1);
		this.position = new Position(Sorse.canvasWidth / 2, Sorse.canvasHeight / 2);
		this.shapes = [
			new Text({
				text: "Play",
				color: "black",
				position: new Position(-50, 12),
			}),

			new RoundedRect({
				color: "#1757e3",
				height: 50,
				width: 200,
				position: new Position(-100, -25),
				radius: 10,
			}),
		];
	}
	onClick(): void {
		console.log(2);
		alert("sss");
	}
}

export class Dude extends SorseSprite {
	onInit() {
		const [loc] = this.state("loc", { x: 100, y: 100 });
		this.position = new Position(loc.x, loc.y);
		this.collision = new Collision([
			new Box(new Position(0, 0), new Position(100, 100)),
		]);
		// Vite decorator bug be like
		// Sorse.on("keyDown", (key: string) => {
		// 	this.onPress.call(this, key);
		// });
		this.shapes = [
			new RoundedRect({
				color: "blue",
				position: new Position(0, 0),
				height: 100,
				width: 100,
				radius: 10,
			}),
		];
	}
	async onClick() {
		// this.shapes.push(
		// 	new RoundedRect({
		// 	color: "blue",
		// 	position: new Position(50, 50),
		// 	height: 100,
		// 	width: 100,
		// 	radius: 10,
		// }),)
	}
	onKeyDown(key: string): void {
		const [loc, setLoc] = this.state<{ x: number; y: number }>("loc");
		console.log("You pressed:", key);
		if (key == "W") setLoc({ x: loc.x, y: loc.y + 10 });
	}
	// onPress(_key: string): void {
	// 	console.log("toggling visibility");
	// 	this.visible = !this.visible;
	// }
}
