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
	position,
	children,
	color,
	font,
	visible,
	text,
	align,
	border,
	onClick,
	shadow,
	rotation
}: TextProps): ShapeReturn => {
	return {
		type: ShapeType.Text,
		children: children ?? [],
		color,
		pos: position,
		font: font ?? new Font(),
		text,
		align,
		border,
		visible: visible ?? true,
		onClick,
		shadow,
		rotation
	};
};
