/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	Font,
	type ShapeReturn,
	ShapeType,
	type TextProps,
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
	onClick
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
		onClick
	};
};
