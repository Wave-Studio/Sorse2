/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */
import { GameOptions } from "../index";
import { Sorse } from "./engine/index";

export const init = (opts: GameOptions) => {
	let onRender: () => void;
	let clicked = false;

	const canvas =
		document.getElementById("sorse-canvas") != undefined &&
		document.getElementById("sorse-canvas") instanceof HTMLCanvasElement
			? (document.getElementById("sorse-canvas") as HTMLCanvasElement)
			: (() => {
					const canvas = document.createElement("canvas");
					canvas.id = "sorse-canvas";
					document.body.appendChild(canvas);
					return canvas;
			  })();

	canvas.width = opts.canvas?.width ?? 1080;
	canvas.height = opts.canvas?.height ?? 720;
	
	if (opts.canvas?.fullscreen != undefined) {
		// Implement aspect ratio support
		canvas.style.width = "100%";
		canvas.style.height = "100%";
	}

	const ctx = canvas.getContext("2d");

	if (ctx == undefined) {
		return alert(
			"[Sorse] Canvas context is not supported. Please use a modern browser."
		);
	} else {
		let buttonCoords = [
			{ x: 0, y: 0 },
			{ x: 0, y: 0 },
		];

		onRender = () => {
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "grey";
			buttonCoords = [
				{ x: canvas.width / 2 - 100, y: canvas.height / 2 - 50 },
				{ x: canvas.width / 2 + 200, y: canvas.height / 2 + 100 },
			];
			const [tl, br] = buttonCoords;
			ctx.fillRect(
				tl.x,
				tl.y,
				br.x - canvas.width / 2,
				br.y - canvas.height / 2
			);
			ctx.fillStyle = "white";
			ctx.font = "50px Arial";
			ctx.fillText("Play", canvas.width / 2 - 50, canvas.height / 2 + 15);
		};

		const listener = (e: MouseEvent) => {
			if (clicked == false) {
				if (e.x >= buttonCoords[0].x && e.x <= buttonCoords[1].x) {
					if (e.y >= buttonCoords[0].y && e.y <= buttonCoords[1].y) {
						clicked = true;
						canvas.removeEventListener("click", listener);
						new Sorse(opts, canvas, ctx);
					}
				}
			}
		};

		onRender();
		canvas.addEventListener("click", listener);
	}
};
