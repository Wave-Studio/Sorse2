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
		Sorse.emit('render');
	}

	constructor() {
		super();
	}
}
