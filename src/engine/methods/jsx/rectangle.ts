/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type RectangleProps,
	type ShapeReturn,
	ShapeType,
} from "../../../index";

export const Rectangle = ({
	children,
	color,
	position,
	width,
	height,
	border,
	visible,
	onClick,
	shadow
}: RectangleProps): ShapeReturn => {
	return {
		type: ShapeType.Rectangle,
		children: children ?? [],
		color,
		pos: position,
		width,
		height,
		border,
		visible: visible ?? true,
		onClick,
		shadow
	};
};
