/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type ContainerProps,
	type ShapeReturn,
	ShapeType,
} from "../../../index";

export const Container = ({
	children,
	offset,
	visible,
	onClick,
}: ContainerProps): ShapeReturn => {
	return {
		type: ShapeType.Container,
		visible: visible ?? true,
		children: children ?? [],
		offset,
		onClick
	};
};
