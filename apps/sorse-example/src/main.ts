import { initSorse, Position, SorseScene, Sorse, Image } from "sorse";

import { StartButton, Dude } from "./sprites";

import "./styles.css";

// ---
// SCENES
// ---
class Backdrop extends SorseScene {
	public onInit(): void {
		this.sceneBackground = [
			new Image({
				src: "./imgs/pokemon.png",
				position: new Position(0, 0),
				width: Sorse.canvasWidth * 3,
				height: Sorse.canvasHeight * 1.5,
			}),
		];

		//new Player("./sound.mp3").play(50);

		Sorse.on("stateChange", (_, __, name, value) => {
			if (name == "started" && value == true) {
				//this.visible = false
			}
		});
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

class Start extends SorseScene {
	public onInit(): void {
		//const [started, setStarted] = this.state("started", false);
		Sorse.setState("started", false);
		this.visible = true;
		this.sprites = [new StartButton()];
		Sorse.on("stateChange", (_, __, name, value) => {
			if (name == "started" && value == true) {
				this.visible = false;
			}
		});
	}

	onClick(): void {
		//const [started, setStarted] = this.state("started");
		console.log("test");
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

class Game extends SorseScene {
	public onInit(): void {
		this.visible = false;
		this.sprites = [new Dude()];

		Sorse.on("stateChange", (_, __, name, value) => {
			if (name == "started" && value == true) {
				this.visible = true;
			}
		});
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

// ---
// OTHER
// ---

initSorse({
	author: "Wave-studio",
	name: "Test App",
	version: "1.0.0",
	scenes: [new Backdrop(), new Start(), new Game()],
});
