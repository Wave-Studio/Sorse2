/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type SquareProps, type ShapeReturn, ShapeType } from "../../../index";

export const Square = ({
	children,
	color,
	pos,
	sideLength,
	border,
	visible,
}: SquareProps): ShapeReturn => {
	return {
		type: ShapeType.Rectangle,
		children: children ?? [],
		color,
		pos,
		width: sideLength,
		height: sideLength,
		border,
		visible: visible ?? true,
	};
};
