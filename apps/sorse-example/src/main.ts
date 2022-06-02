import { initSorse, Position, SorseScene, Sorse, Image, Player } from "sorse";

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
				position: new Position(-50, -50),
				width: Sorse.canvasWidth,
				height: Sorse.canvasHeight,
			}),
		];

		new Player("./sound.mp3").play(50);
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
		this.visible = !Sorse.getState("started")!;
		this.sprites = [new StartButton()];
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
		Sorse.setState("started", false);
		this.visible = !Sorse.getState("started")!;
		this.sprites = [new Dude()];
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
