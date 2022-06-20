/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { type ImageProps, type ShapeReturn, ShapeType } from "../../../index";

export const Image = ({
	children,
	pos,
	width,
	height,
	src,
	visible,
}: ImageProps): ShapeReturn => {
	return {
		type: ShapeType.Image,
		children: children ?? [],
		src,
		pos,
		width,
		height,
		visible: visible ?? true,
	};
};
