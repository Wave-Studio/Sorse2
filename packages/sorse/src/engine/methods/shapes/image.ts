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

	public async render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		if (typeof this._src == "string") {
			let img = document.querySelector(
				`img[src="${this._src}"]`
			) as HTMLImageElement;

			if (img == undefined) {
				const load = (url: string) => {
					return new Promise((resolve, reject) => {
						const img = document.createElement("img");
						img.src = url;
						img.onload = () => resolve(img);
						img.onerror = () =>
							reject(new Error("Failed to load image " + url));
						document.getElementById("sorse-cache")!.appendChild(img);
					});
				};

				img = (await load(this._src)) as HTMLImageElement;
			}

			if (this._width == undefined || this._height == undefined) {
				ctx.drawImage(img, x + this._position.x, y + this._position.y);
			} else {
				ctx.drawImage(
					img,
					x + this._position.x,
					y + this._position.y,
					this._width,
					this._height
				);
			}
		} else {
			if (this._width == undefined || this._height == undefined) {
				ctx.drawImage(this._src, x + this._position.x, y + this._position.y);
			} else {
				ctx.drawImage(
					this._src,
					x + this._position.x,
					y + this._position.y,
					this._width,
					this._height
				);
			}
		}
	}
}
