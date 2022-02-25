/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { Sorse } from "../index";
import { SorseClassCore, Sprite } from "../../../index";

export class Scene extends SorseClassCore {
	private sceneSprites: Sprite[] = [];

	public get sprites(): Sprite[] {
		return this.sceneSprites;
	}

	protected setSprites(sprites: Sprite[]) {
		this.sceneSprites = sprites;
		Sorse.emit("render");
	}

	private parsePercentTemplate(
		strs: TemplateStringsArray,
		...extras: unknown[]
	) {
		let fullStr = "";
		// Join strs using extras
		for (let i = 0; i < strs.length; i++) {
			fullStr += strs[i];
			if (i < extras.length) {
				fullStr += `${extras[i]}`;
			}
		}

		const number = parseInt(fullStr.replace(/%/g, ""));

		if (isNaN(number)) {
			throw new Error(`[Sorse:Scene] Invalid percent string: ${fullStr}`);
		}

		return number;
	}

	private getErrorMessageForTemplates(wh: string) {
		return [
			`[Sorse:Scene] ${wh} is undefined. Please construct the scene before using templates.`,
			"If you're using them to set variables, make sure you set them in the constructor or in any methods",
		].join("\n");
	}

	protected wP(strs: TemplateStringsArray, ...extras: unknown[]) {
		if (this.width == undefined)
			throw new Error(
				this.getErrorMessageForTemplates("Width")
			);
		return (this.width / 100) * this.parsePercentTemplate(strs, ...extras);
	}

	protected hP(strs: TemplateStringsArray, ...extras: unknown[]) {
		if (this.height == undefined)
			throw new Error(
				this.getErrorMessageForTemplates("Height")
			);
		return (this.height / 100) * this.parsePercentTemplate(strs, ...extras);
	}

	constructor(public readonly width: number, public readonly height: number) {
		super();
	}
}