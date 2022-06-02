/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { SorseTextOpts, SorseShapeCore, SorseFont } from "../../../index";

export class Text extends SorseShapeCore {
	private _text: string;
	private _font: SorseFont;
	private _fill: boolean;
	private _align?: CanvasTextAlign;
	private _direction?: CanvasDirection;
	private _borderWidth?: number;
	private _borderColor?: string | CanvasGradient | CanvasPattern;

	constructor({
		color,
		position,
		text,
		font,
		fill,
		align,
		direction,
		border
	}: SorseTextOpts) {
		super();
		this._position = position;
		this._text = text;
		this._font = font ?? new SorseFont();
		this._fill = fill ?? true;
		this._color = color;
		this._align = align;
		this._direction = direction;
		if (border != undefined) {
			this._borderWidth = border.width;
			this._borderColor = border.color;
		}
	}

	public render(ctx: CanvasRenderingContext2D, x: number, y: number) {
		ctx.fillStyle = this._color;
		ctx.strokeStyle = this._color;
		ctx.font = this._font.font;
		ctx.textAlign = this._align ?? "left";
		ctx.direction = this._direction ?? "ltr";

		if (!this._fill) {
			ctx.strokeText(this._text, x + this._position.x, y + this._position.y);
		} else {
			ctx.fillText(this._text, x + this._position.x, y + this._position.y);
		}

		if (this._borderWidth != undefined && this._borderColor != undefined) {
			ctx.strokeStyle = this._borderColor;
			ctx.lineWidth = this._borderWidth;
			ctx.strokeText(this._text, x + this._position.x, y + this._position.y);
		}
	}
}
