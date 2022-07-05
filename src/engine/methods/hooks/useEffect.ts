/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { useState } from "../../../index";

export const useEffect = (
	callback: () => void,
	dependencies: unknown[] = []
) => {
	const [deps, setDeps] = useState<unknown[] | null>(null);

	// Yes, there are easier ways to do this
	// Will I use them? No.

	if (deps == null) {
		setDeps(dependencies);
		callback();
	} else {
		if (deps.length != dependencies.length) {
			setDeps(dependencies);
			callback();
		} else {
			for (let i = 0; i < deps.length; i++) {
				if (deps[i] != dependencies[i]) {
					setDeps(dependencies);
					callback();
					break;
				}
			}
		}
	}
};
