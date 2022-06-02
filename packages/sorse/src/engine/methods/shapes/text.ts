/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseTextOpts, SorseShapeCore } from "../../../index";

export class Text extends SorseShapeCore {
	private _text: string;
	private _size?: number;
	private _font?: string;
	private _fill?: boolean;
	private _align?: CanvasTextAlign;
	private _direction?: CanvasDirection;
	private _bold?: boolean;

	constructor({
		color,
		position,
		text,
		size,
		font,
		fill,
		align,
		direction,
		bold
	}: SorseTextOpts) {
		super();
		this._position = position;
		this._text = text;
		this._size = size;
		this._font = font;
		this._fill = fill;
		this._color = color;
		this._align = align;
		this._direction = direction;
		this._bold = bold;
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.font = (this._bold ? "bold " : "") + (this._size || "12") + "px " + (this._font || "sans serif");
		if (this._align)
		ctx.textAlign = this._align;
		if (this._direction)
		ctx.direction = this._direction;
		if (this._fill || this._fill == undefined)
		ctx.fillText(this._text, x + this._position.x, y + this._position.y);
		else 
		ctx.strokeText(this._text, x + this._position.x, y + this._position.y);
		ctx.font = '48px serif';

	}
}
