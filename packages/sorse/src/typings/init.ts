/**
 * Sorse 2
 *
 * Developed by Wave-studio
 */

export interface InitOptions {
	name: string;
	author: string | string[];
	version: string | number;
	description?: string;
	canvas: {
		nativeSize: {
			width: number;
			height: number;
		},
		/** If not provided uses nativeSize */
		scaleTo?: {
			width: number;
			height: number;
		}
	};
	mediaControlArtwork?: MediaImage[];
}