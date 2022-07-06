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
	pos,
	width,
	height,
	border,
	visible,
	onClick
}: RectangleProps): ShapeReturn => {
	return {
		type: ShapeType.Rectangle,
		children: children ?? [],
		color,
		pos,
		width,
		height,
		border,
		visible: visible ?? true,
		onClick
	};
};
