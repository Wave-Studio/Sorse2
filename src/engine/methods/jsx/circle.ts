/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type CircleProps, type ShapeReturn, ShapeType } from "../../../index";

export const Circle = ({
	children,
	color,
	position,
	radius,
	border,
	visible,
	onClick,
	shadow,
	align,
	rotation,
}: CircleProps): ShapeReturn => {
	return {
		type: ShapeType.Circle,
		children: children ?? [],
		color,
		pos: position,
		radius,
		border,
		visible: visible ?? true,
		onClick,
		shadow,
		align,
		rotation
	};
};
