/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type LineProps, type ShapeReturn, ShapeType } from "../../../index";

export const Line = ({
	children,
	color,
	pos,
	width,
	start,
	end,
	visible,
}: LineProps): ShapeReturn => {
	return {
		type: ShapeType.Line,
		children: children ?? [],
		color,
		pos,
		width,
		start,
		end,
		visible: visible ?? true,
	};
};
