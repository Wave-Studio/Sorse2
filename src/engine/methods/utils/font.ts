/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Sorse } from "../../../index";

export class Font {
	private _fontSize: number;

	get fontSize() {
		return this._fontSize;
	}

	set fontSize(fontSize: number) {
		this._fontSize = fontSize * Sorse.scaleFactorHeight;
	}

	constructor(
		public fontName = "Arial",
		fontSize = 12,
		public modifiers: string[] = [""]
	) {
		this._fontSize = fontSize * Sorse.scaleFactorHeight;
	}

	public get font() {
		return `${this.modifiers.join(" ")} ${this._fontSize}px ${
			this.fontName
		}`.trim();
	}
}
