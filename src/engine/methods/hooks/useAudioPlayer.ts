/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { useState } from "../../../index";

export const useAudioPlayer = (src: string) => {
	const [player, setPlayer] = useState<HTMLAudioElement | null>(
		null
	);
	// @ts-expect-error
	let audioPlayer: HTMLAudioElement = player;
	
	if (audioPlayer == null) {
		const audio = document.createElement("audio");
		audio.src = src;
		document.getElementById("sorse-cache")!.appendChild(audio);
		setPlayer(audio);
		audioPlayer = audio;
	}

	navigator.mediaSession.metadata = new MediaMetadata();

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
