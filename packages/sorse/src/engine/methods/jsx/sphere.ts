/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type SphereProps, type ShapeReturn, ShapeType } from "../../../index";

export const Sphere = ({
	children,
	color,
	pos,
	radius,
	border,
	visible,
}: SphereProps): ShapeReturn => {
	return {
		type: ShapeType.Sphere,
		children: children ?? [],
		color,
		pos,
		radius,
		border,
		visible: visible ?? true,
	};
};
