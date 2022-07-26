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

export const circleRender = (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const radius = shape.radius as number;
				const width = radius * 2;
				const height = radius * 2;

				if (shape.align != undefined) {
					switch (shape.align.x) {
						case AlignTypeX.Left: {
							drawPosition.x -= width / 2;
							break;
						}
						case AlignTypeX.Center: {
							break;
						}
						case AlignTypeX.Right: {
							drawPosition.x += width / 2;
							break;
						}
					}

					switch (shape.align.y) {
						case AlignTypeY.Top: {
							drawPosition.y -= height / 2;
							break;
						}

						case AlignTypeY.Center: {
							break;
						}

						case AlignTypeY.Bottom: {
							drawPosition.y += height / 2;
							break;
						}
					}
				}

				context.arc(
					drawPosition.x,
					drawPosition.y,
					radius,
					0,
					2 * Math.PI
				);
				context.fill();

				if (shape.border != undefined) {
					context.stroke();
				}
};
