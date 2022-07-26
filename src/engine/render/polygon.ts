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

export const polygonRender = (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const getWidthAndHeight = () => {
		let y = 0;
		let x = 0;
		for (const point of shape.points as Position[]) {
			y = Math.max(y, point.y);
			x = Math.max(x, point.x);
		}
		return [x, y];
	};

	if (shape.align != undefined) {
		const [width, height] = getWidthAndHeight();
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

	context.save();
	context.moveTo(drawPosition.x, drawPosition.y);
	context.beginPath();

	for (const point of shape.points as Position[]) {
		context.lineTo(
			drawPosition.x + point.x,
			drawPosition.y + point.y
		);
	}

	context.moveTo(drawPosition.x, drawPosition.y);
	context.closePath();
	context.fill();

	if (shape.border != undefined) {
		context.stroke();
	}

	context.restore();
};
