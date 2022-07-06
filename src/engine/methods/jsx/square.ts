/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type ShapeReturn, ShapeType, type SquareProps } from "../../../index";

export const Square = ({
	children,
	color,
	pos,
	sideLength,
	border,
	visible,
	onClick
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
		onClick
	};
};
