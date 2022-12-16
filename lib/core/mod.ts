import { SorseGameConstructorOptions } from "sorse/types";

export class SorseGame {
	constructor({ parentDiv }: SorseGameConstructorOptions) {
		const parent = parentDiv
			? document.getElementById(parentDiv) instanceof HTMLDivElement
				? document.getElementById(parentDiv)
				: document.body
			: document.body;

		const sorseDiv = document.createElement("div");
		sorseDiv.id = "sorse-container";
	}
}
