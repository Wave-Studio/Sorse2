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
} from "../../index";

export const lineRender = (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const start = shape.start as Position;
	const end = shape.end as Position;

	if (shape.align != undefined) {
		switch (shape.align.x) {
			case AlignTypeX.Left: {
				break;
			}
			case AlignTypeX.Center: {
				drawPosition.x -= Math.abs(start.x - end.x) / 2;
				break;
			}
			case AlignTypeX.Right: {
				drawPosition.x -= Math.abs(start.x - end.x);
				break;
			}
		}

		switch (shape.align.y) {
			case AlignTypeY.Top: {
				break;
			}

			case AlignTypeY.Center: {
				drawPosition.y += Math.abs(start.y - end.y) / 2;
				break;
			}

			case AlignTypeY.Bottom: {
				drawPosition.y += Math.abs(start.y - end.y);
				break;
			}
		}
	}

	context.moveTo(drawPosition.x + start.x, drawPosition.y + start.y);
	context.beginPath();
	context.lineTo(drawPosition.x + end.x, drawPosition.y + end.y);
	context.closePath();
	context.stroke();
};
