/**
 * Sorse 2
 * 
 * Developed by Wave-studio
 */

export interface SorseEvents {
	"ready": () => void;
	"render": () => void;
	"stateChange": (name: string, value: any, type: 'set' | 'delete') => void;
	"input": (key: string) => void
}