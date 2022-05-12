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
		} else {
			this.src = src;
		}
	}

	async play(timestamp: number = 0) {
		this.src.currentTime = timestamp;
		await this.src.play();
		return this;
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
