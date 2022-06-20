/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../../index";

export class Font {
	private fontSize: number;

	constructor(
		private fontName = "Arial",
		fontSize = 12,
		private modifiers: string[] = [""]
	) {
		this.fontSize = fontSize * Sorse.scaleFactorHeight;
	}

	public get font() {
		return `${this.modifiers.join(" ")} ${this.fontSize}px ${
			this.fontName
		}`.trim();
	}
}
