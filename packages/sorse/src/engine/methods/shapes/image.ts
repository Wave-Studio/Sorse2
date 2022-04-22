/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseImageOpts, SorseShapeCore } from "../../../index";

export class Image extends SorseShapeCore {
	private _width?: number;
	private _height?: number;
	private _src: SorseImageOpts["src"];

	constructor({ src, height, width, position }: SorseImageOpts) {
		super();
		this._position = position;
		this._width = width;
		this._height = height;
		this._src = src;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		if (typeof this._src == "string") {
			const img = document.createElement("img");
			img.src = this._src;
			if (this._width == undefined || this._height == undefined) {
				ctx.drawImage(img, x, y);
			} else {
				ctx.drawImage(img, x, y, this._width, this._height);
			}
			img.remove();
		} else {
			if (this._width == undefined || this._height == undefined) {
				ctx.drawImage(this._src, x, y);
			} else {
				ctx.drawImage(this._src, x, y, this._width, this._height);
			}
		}
	}
}
