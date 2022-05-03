/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

export interface SorseEvents {
	ready: () => void;
	render: () => void;
	keyDown: (key: string) => void;
	keyUp: (key: string) => void;
	debug: (type: string, ...args: unknown[]) => void;
	stateChange: (name: string, value: any, type: "set" | "delete") => void;
	rawMouseClick: (x: number, y: number, type: SorseClickType) => void;
}

export enum SorseClickType {
	Left,
	Right,
	Middle,
	Unknown
}