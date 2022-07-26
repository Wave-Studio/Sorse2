/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type PolygonProps, type ShapeReturn, ShapeType } from "../../../index";

export const Polygon = ({
	children,
	color,
	position,
	points,
	border,
	visible,
	onClick,
	shadow,
	align,
	rotation
}: PolygonProps): ShapeReturn => {
	return {
		type: ShapeType.Polygon,
		children: children ?? [],
		color,
		pos: position,
		points,
		border,
		visible: visible ?? true,
		onClick,
		shadow,
		align,
		rotation
	};
};
