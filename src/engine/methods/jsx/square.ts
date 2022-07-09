/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type ShapeReturn, ShapeType, type SquareProps } from "../../../index";

export const Square = ({
	children,
	color,
	position,
	sideLength,
	border,
	visible,
	onClick,
	shadow,
	align
}: SquareProps): ShapeReturn => {
	return {
		type: ShapeType.Rectangle,
		children: children ?? [],
		color,
		pos: position,
		width: sideLength,
		height: sideLength,
		border,
		visible: visible ?? true,
		onClick,
		shadow,
		align
	};
};
