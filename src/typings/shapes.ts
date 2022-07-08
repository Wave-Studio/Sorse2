/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type Font, type Position, type CollisionBox, type ClickType } from "../index";

export interface ShapeProps {
	position?: Position;
	/** DO NOT SET MANUALLY, THIS IS REPLACED BY SORSE */
	children?: ShapeReturn[];
	visible?: boolean;
	onClick?: {
		collisionBox: CollisionBox,
		callback: () => void 
	}
	shadow?: {
		color?: string;
		offset?: Position;
		blur?: number;
	}
}

export interface ColoredShapeProps extends ShapeProps {
	color?: string | CanvasPattern | CanvasGradient;
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
	onClick?: {
		collisionBox: CollisionBox,
		callback: ({ pos, type }: { pos: Position, type: ClickType}) => void 
	}
	shadow?: {
		color?: string;
		offset?: Position;
		blur?: number;
	}
	[key: string]: unknown;
}

export interface ContainerProps {
	children?: ShapeReturn[];
	visible?: boolean;
	offset?: Position;
	onClick?: {
		collisionBox: CollisionBox,
		callback: () => void 
	}
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
