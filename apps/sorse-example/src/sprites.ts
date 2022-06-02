import {
	Box,
	Collision,
	Position,
	RoundedRect,
	SorseSprite,
	Sorse,
	Text,
	SorseFont,
	Rect,
	rgba,
	Image,
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
	}
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
		this.collision = new Collision([
			new Box(new Position(-100, -25), new Position(100, 25)),
		]);
		this.shapes = [
			new Image({
				src: "/imgs/logo.png",
				position: new Position(-100, -100),
				height: 70,
				width: 400,
			}),

			new Text({
				text: "Play",
				color: "white",
				position: new Position(0, 12),
				font: new SorseFont("Arial", 30, ["bold"]),
				fill: true,
				align: "center",
			}),

			new Text({
				text: "Budget",
				color: "black",
				position: new Position(-100, -100),
				font: new SorseFont("Arial", 100, ["bold"]),
				fill: true,
				//align: "right",
				border: {
					width: 5,
					color: "white",
				},
			}),

			new RoundedRect({
				color: "#1757e3",
				height: 50,
				width: 200,
				position: new Position(-100, -25),
				radius: 10,
			}),

			new Rect({
				color: rgba(0, 0, 0, 0.7),
				height: Sorse.canvasHeight,
				width: Sorse.canvasWidth,
				position: new Position(Sorse.canvasWidth / -2, Sorse.canvasHeight / -2),
			}),
		];
	}
	onClick(): void {
		console.log(2);
		Sorse.setState("started", true);
	}
}

export class Dude extends SorseSprite {
	onInit() {
		this.setState("pressedKeys", []);
		this.position = new Position(Sorse.canvasWidth / 2, Sorse.canvasHeight / 2);
		this.collision = new Collision([
			new Box(new Position(0, 0), new Position(100, 100)),
		]);
		this.shapes = [
			new RoundedRect({
				color: "blue",
				position: new Position(0, 0),
				height: 20,
				width: 20,
				radius: 10,
			}),
		];

		setInterval(() => {
			const [pressedKeys] = this.state<string[]>("pressedKeys");
			const speed = 2;

			pressedKeys.forEach((key) => {
				switch (key) {
					case "W":
					case "ARROWUP": {
						this.position.y -= speed;
						break;
					}
					case "S":
					case "ARROWDOWN": {
						this.position.y += speed;
						break;
					}
					case "A":
					case "ARROWLEFT": {
						this.position.x -= speed;
						break;
					}
					case "D":
					case "ARROWRIGHT": {
						this.position.x += speed;
						break;
					}
				}
			});
		}, 1000 / 60);
	}

	onKeyUp(key: string): void {
		const [pressedKeys, setPressedKeys] = this.state<string[]>("pressedKeys");
		setPressedKeys(pressedKeys.filter((k) => k !== key));
	}

	onKeyDown(key: string): void {
		const [pressedKeys, setPressedKeys] = this.state<string[]>("pressedKeys");
		setPressedKeys([...pressedKeys, key]);
	}
}
