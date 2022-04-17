/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Position } from "../index";

export interface SorseShapeOptsBase {
	position: Position;
	color: string | CanvasGradient | CanvasPattern;
}

export interface SorseSquareOpts extends SorseShapeOptsBase {
	sideLength: number;
}

export interface SorseRectOpts extends SorseShapeOptsBase {
	width: number;
	height: number;
}

export interface SorseCircleOpts extends SorseShapeOptsBase {
	radius: number;
}

export interface SorsePolygonOpts extends SorseShapeOptsBase {
	points: Position[];
}

export interface SorseLineOpts extends SorseShapeOptsBase {
	from: Position;
	to: Position;
}