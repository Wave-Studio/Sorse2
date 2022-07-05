/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type CircleProps, type ShapeReturn, ShapeType } from "../../../index";

export const Circle = ({
	children,
	color,
	pos,
	radius,
	border,
	visible,
}: CircleProps): ShapeReturn => {
	return {
		type: ShapeType.Circle,
		children: children ?? [],
		color,
		pos,
		radius,
		border,
		visible: visible ?? true,
	};
};
