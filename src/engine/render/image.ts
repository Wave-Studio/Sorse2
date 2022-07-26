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

export const imageRender = async (
	shape: ShapeReturn,
	drawPosition: Position,
	context: CanvasRenderingContext2D
) => {
	const image = shape.src as CanvasImageSource | string;
	let imageSource: CanvasImageSource;

	if (typeof image == "string") {
		const promise = () =>
			new Promise((resolve, reject) => {
				if (document.getElementById(image) != null) {
					resolve(document.getElementById(image) as HTMLImageElement);
				} else {
					const img = document.createElement("img");
					img.onload = () => {
						document.getElementById("sorse-cache")!.appendChild(img);
						imageSource = img;
						resolve(img);
					};
					img.onerror = () =>
						reject(new Error("Failed to load image " + image));
					img.id = image;
					img.src = image;
				}
			});

		imageSource = (await promise()) as HTMLImageElement;
	} else {
		imageSource = image;
	}

	const width = (shape.width as number) ?? imageSource.width;
	const height = (shape.height as number) ?? imageSource.height;

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

	context.drawImage(
		imageSource!,
		drawPosition.x,
		drawPosition.y,
		width,
		height
	);
}