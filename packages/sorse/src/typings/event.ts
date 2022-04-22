/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

export interface SorseEvents {
	ready: () => void;
	render: () => void;
	input: (key: string) => void;
	debug: (type: string, ...args: unknown[]) => void;
	stateChange: (name: string, value: any, type: "set" | "delete") => void;
}
