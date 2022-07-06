/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type PolygonProps, type ShapeReturn, ShapeType } from "../../../index";

export const Polygon = ({
	children,
	color,
	pos,
	points,
	border,
	visible,
	onClick
}: PolygonProps): ShapeReturn => {
	return {
		type: ShapeType.Polygon,
		children: children ?? [],
		color,
		pos,
		points,
		border,
		visible: visible ?? true,
		onClick
	};
};
