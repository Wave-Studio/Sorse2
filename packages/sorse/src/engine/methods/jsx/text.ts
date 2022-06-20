/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type ShapeReturn,
	type TextProps,
	ShapeType,
	Font,
} from "../../../index";

export const Text = ({
	pos,
	children,
	color,
	font,
	visible,
	text,
	align,
	border,
	direction,
}: TextProps): ShapeReturn => {
	return {
		type: ShapeType.Text,
		children: children ?? [],
		color,
		pos,
		font: font ?? new Font(),
		text,
		align,
		border,
		direction,
		visible: visible ?? true,
	};
};
