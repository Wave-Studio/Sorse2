/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { useState } from "../../../index";

export const useAudioPlayer = (src: string) => {
	const [audioPlayer] = useState<HTMLAudioElement>(
		(() => {
			const audioPlayer = document.createElement("audio");
			audioPlayer.src = src;
			document.getElementById("sorse-cache")!.appendChild(audioPlayer);
			return audioPlayer;
		})()
	);

	// @ts-expect-error Disable media controls
	navigator.mediaSession.metadata = {};

	return {
		play: () => {
			audioPlayer.currentTime = 0;
			audioPlayer.play();
		},

		playAt: (time: number) => {
			audioPlayer.currentTime = time;
			audioPlayer.play();
		},

		resume: () => {
			audioPlayer.play();
		},

		pause: () => {
			audioPlayer.pause();
		},

		stop: () => {
			audioPlayer.pause();
			audioPlayer.currentTime = 0;
		},

		setVolume: (volume: number) => {
			audioPlayer.volume = volume;
		},

		getVolume: () => {
			return audioPlayer.volume;
		},

		getPosition: () => {
			return audioPlayer.currentTime;
		},

		getDuration: () => {
			return audioPlayer.duration;
		},

		isPlaying: () => {
			return !audioPlayer.paused;
		},

		isEnded: () => {
			return audioPlayer.ended;
		},

		setLoop: (loop: boolean) => {
			audioPlayer.loop = loop;
		},

		getLoop: () => {
			return audioPlayer.loop;
		},
	};
};
