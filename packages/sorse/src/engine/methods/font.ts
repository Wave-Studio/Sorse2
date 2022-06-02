/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

export class SorseFont {
	constructor(private fontName = "Arial", private fontSize = 12, private modifiers: string[] = [""]) {}

	public get font() {
		return `${this.modifiers.join(" ")} ${this.fontSize}px ${this.fontName}`.trim();
	}
}