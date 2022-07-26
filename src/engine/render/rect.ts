/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import {
	type ShapeReturn,
	type Position,
	AlignTypeX,
	AlignTypeY,
	Sorse,
} from "../../index";

export const rectRender = (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const width = shape.width as number;
	const height = shape.height as number;

	if (shape.align != undefined) {
		switch (shape.align.x) {
			case AlignTypeX.Left: {
				break;
			}
			case AlignTypeX.Center: {
				drawPosition.x -= width / 2;
				break;
			}
			case AlignTypeX.Right: {
				drawPosition.x -= width;
				break;
			}
		}

		switch (shape.align.y) {
			case AlignTypeY.Top: {
				break;
			}

			case AlignTypeY.Center: {
				drawPosition.y += height / 2;
				break;
			}

			case AlignTypeY.Bottom: {
				drawPosition.y += height;
				break;
			}
		}
	}

	context.fillRect(
		drawPosition.x,
		drawPosition.y,
		width * Sorse.scaleFactorWidth,
		height * Sorse.scaleFactorHeight
	);

	if (shape.border != undefined) {
		context.strokeRect(
			drawPosition.x,
			drawPosition.y,
			width * Sorse.scaleFactorWidth,
			height * Sorse.scaleFactorHeight
		);
	}
};
