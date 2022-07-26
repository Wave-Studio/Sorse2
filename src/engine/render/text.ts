/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type ShapeReturn,
	type Position,
	type Font,
	AlignTypeY,
} from "../../index";

export const textRender = (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const text = shape.text as string;
	const font = shape.font as Font;
	context.font = font.font;
	context.textAlign = shape.align?.x ?? "left";
	context.direction = "inherit";
	context.fillText(text, drawPosition.x, drawPosition.y);

	if (shape.align != undefined) {
		switch (shape.align.y) {
			case AlignTypeY.Top: {
				break;
			}
			case AlignTypeY.Center: {
				drawPosition.y += font.fontSize / 2;
				break;
			}
			case AlignTypeY.Bottom: {
				drawPosition.y += font.fontSize;
				break;
			}
		}
	}

	if (shape.border != undefined) {
		context.strokeText(text, drawPosition.x, drawPosition.y);
	}
};
