/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type ImageProps, type ShapeReturn, ShapeType } from "../../../index";

export const Image = ({
	children,
	position,
	width,
	height,
	src,
	visible,
	onClick,
	shadow,
	align
}: ImageProps): ShapeReturn => {
	return {
		type: ShapeType.Image,
		children: children ?? [],
		src,
		pos: position,
		width,
		height,
		visible: visible ?? true,
		onClick,
		shadow,
		align
	};
};
