/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type LineProps, type ShapeReturn, ShapeType } from "../../../index";

export const Line = ({
	children,
	color,
	position,
	width,
	start,
	end,
	visible,
	onClick,
	shadow,
	align,
	rotation,
}: LineProps): ShapeReturn => {
	return {
		type: ShapeType.Line,
		children: children ?? [],
		color,
		pos: position,
		width,
		start,
		end,
		visible: visible ?? true,
		onClick,
		shadow,
		align,
		rotation
	};
};
