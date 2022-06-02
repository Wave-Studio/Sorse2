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
	stateChange: (action: "SET" | "DELETE", id: string, stateName: string, value: unknown) => void;
	rawMouseClick: (x: number, y: number, type: SorseClickType) => void;
}

export enum SorseClickType {
	Unknown,
	Left,
	Middle,
	Right,
}
