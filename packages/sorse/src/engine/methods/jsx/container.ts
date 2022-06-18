/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type ShapeReturn,
	type ContainerProps,
	ShapeType,
} from "../../../index";

export const Container = ({
	children,
	offset,
	visible,
}: ContainerProps): ShapeReturn => {
	return {
		type: ShapeType.Container,
		visible: visible ?? true,
		children: children ?? [],
		offset,
	};
};
