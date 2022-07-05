/*
 * Sorse 2
 *
 * Developed by Wave-studio
 */

import { useState, useEffect } from "../../../index";

/**
 * Execute asyncronous code via a hook and return the result
 */
export const useLoad = <T>(
	func: () => Promise<T>,
	callFunction: () => boolean = () => true
): [boolean, T | null] => {
	const [loadData, setLoadData] = useState<T | null>(null);
	const [hasLoaded, setHasLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	if (!hasLoaded && callFunction() && !loading) {
		setLoading(true);
		func().then((data) => {
			setLoadData(data);
			setHasLoaded(true);
			setLoading(false);
		});
	}

	return [hasLoaded, loadData];
};
