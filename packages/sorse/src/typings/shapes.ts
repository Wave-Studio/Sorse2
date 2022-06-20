/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { Position, Font } from "../index";

export interface ShapeProps {
	pos?: Position;
	/** DO NOT SET MANUALLY, THIS IS REPLACED BY SORSE */
	children?: ShapeReturn[];
	visible?: boolean;
}

export interface ColoredShapeProps extends ShapeProps {
	color: string | CanvasPattern | CanvasGradient;
	border?: {
		width: number;
		color: string | CanvasPattern | CanvasGradient;
	};
}

export enum ShapeType {
	Container,
	Rectangle,
	Polygon,
	Line,
	Circle,
	Text,
	Image,
}

export interface ShapeReturn {
	type: ShapeType;
	visible: boolean;
	children: ShapeReturn[];
	pos?: Position;
	offset?: Position;
	[key: string]: unknown;
}

export interface ContainerProps {
	children?: ShapeReturn[];
	visible?: boolean;
	offset?: Position;
}

export interface SquareProps extends ColoredShapeProps {
	sideLength: number;
}

export interface RectangleProps extends ColoredShapeProps {
	width: number;
	height: number;
}

export interface PolygonProps extends ColoredShapeProps {
	points: Position[];
}

export interface LineProps extends ShapeProps {
	start: Position;
	end: Position;
	width?: number;
	color: string | CanvasPattern | CanvasGradient;
}

export interface CircleProps extends ColoredShapeProps {
	radius: number;
}

export interface TextProps extends ColoredShapeProps {
	font?: Font;
	text: string;
	align?: "center" | "end" | "left" | "right" | "start";
	direction?: "inherit" | "ltr" | "rtl";
}

export interface ImageProps extends ShapeProps {
	src: string | CanvasImageSource;
	width?: number;
	height?: number;
}