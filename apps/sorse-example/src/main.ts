import {
	Box,
	Circle,
	Collision,
	initSorse,
	Position,
	Rect,
	RoundedRect,
	SorseClickType,
	SorseScene,
	SorseSprite,
	Sorse,
	Image,
} from "sorse";

import { MySprite, AnotherSprite, StartButton, Dude } from "./sprites"

import "./styles.css";

// ---
// SCENES
// ---

class MyScene extends SorseScene {
	public onInit(): void {
		this.visible = true 
		this.sprites = [new MySprite(), new AnotherSprite()];
		//this.sceneBackground = 
		
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
	
}

class Backdrop extends SorseScene {
	
	public onInit(): void {
		this.sceneBackground = [
			new Image({ src: "./imgs/pokemon.png", position: new Position(-50,-50), width: Sorse.canvasWidth, height: Sorse.canvasHeight })
		]
		
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

class Start extends SorseScene {
	public onInit(): void {
		//const [started, setStarted] = this.state("started", false);
		Sorse.setState("started", false)
		this.visible = !Sorse.getState("started")!
		this.sprites = [new StartButton()];
		
		
	}

	onClick(pos: Position, type: SorseClickType): void {
		//const [started, setStarted] = this.state("started");
		console.log("test")
		
	}

	//@event("stateChange")
	onDebug(...args: string[]) {
		console.log("debug", args);
	}
}

class Game extends SorseScene {
	public onInit(): void {
		
		Sorse.setState("started", false)
		this.visible = !Sorse.getState("started")!
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

