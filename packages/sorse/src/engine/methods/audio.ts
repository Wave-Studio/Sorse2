/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

export class Player {
	private src: HTMLAudioElement;

	constructor(src: HTMLAudioElement | string) {
		if (typeof src === "string") {
			this.src = new Audio(src);
			document.getElementById("sorse-cache")!.appendChild(this.src);
		} else {
			this.src = src;
		}
	}

	async play(volume = 100) {
		if (volume > 100 || volume < 0) {
			throw new Error("Volume must be between 0 and 100");
		}

		this.src.volume = volume/100;
		await this.src.play();
		return this;
	}

	async playAt(time: number) {
		this.src.currentTime = time;
		return await this.src.play();
	}

	pause() {
		this.src.pause();
		return this;
	}

	stop() {
		this.src.pause();
		this.src.currentTime = 0;
		return this;
	}

	async resume() {
		await this.src.play();
		return this;
	}

	get duration() {
		return this.src.duration;
	}

	get currentTime() {
		return this.src.currentTime;
	}

	set currentTime(value: number) {
		this.src.currentTime = value;
	}

	get volume() {
		return this.src.volume;
	}

	set volume(value: number) {
		this.src.volume = value;
	}

	get muted() {
		return this.src.muted;
	}

	set muted(value: boolean) {
		this.src.muted = value;
	}

	get loop() {
		return this.src.loop;
	}

	set loop(value: boolean) {
		this.src.loop = value;
	}

	get ended() {
		return this.src.ended;
	}

	get paused() {
		return this.src.paused;
	}

	get playing() {
		return !this.src.paused;
	}
}
