/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Position, SorseFont } from "../index";

export interface SorseShapeOpts {
	position: Position;
}

export interface SorseColoredShapeOpts extends SorseShapeOpts {
	color: string | CanvasGradient | CanvasPattern;
}

export interface SorseSquareOpts extends SorseColoredShapeOpts {
	sideLength: number;
}

export interface SorseRectOpts extends SorseColoredShapeOpts {
	width: number;
	height: number;
}

export interface SorseTextOpts extends SorseColoredShapeOpts {
	text: string;
	font?: SorseFont;
	fill?: boolean;
	align?: CanvasTextAlign;
	direction?: CanvasDirection;
	border?: {
		width: number;
		color: string | CanvasGradient | CanvasPattern
	};
}

export interface SorseRoundRectOpts extends SorseRectOpts {
	radius: number | { tl: number; tr: number; br: number; bl: number };
}

export interface SorseCircleOpts extends SorseColoredShapeOpts {
	radius: number;
}

export interface SorsePolygonOpts extends SorseColoredShapeOpts {
	points: Position[];
}

export interface SorseLineOpts extends SorseColoredShapeOpts {
	from: Position;
	to: Position;
}

export interface SorseImageOpts extends SorseShapeOpts {
	src: CanvasImageSource | string;
	width?: number;
	height?: number;
}
