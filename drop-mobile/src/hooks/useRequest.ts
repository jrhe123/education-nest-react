import { useCallback, useState } from "react";
import useMount from "./useMount";

interface IOptions {
	params: Record<string, string>;
	manual?: boolean;
	onSuccess?: (res: unknown) => void;
	onError?: (error: unknown) => void;
}

/**
 * 1. auto trigger: useMount
 * 2. manual trigger: run
 */
const useRequest = (
	service: (params: Record<string, string>) => Promise<unknown>,
	options: IOptions
) => {
	const [data, setData] = useState<unknown>();
	const [loading, setLoading] = useState<boolean>(false);

	const init = useCallback(
		(params: Record<string, string>) => {
			setLoading(true);
			return service(params)
				.then((res) => {
					setData(res);
					setLoading(false);
					// callback
					options.onSuccess?.(res);
				})
				.catch((error) => {
					setLoading(false);
					// callback
					options.onError?.(error);
				});
		},
		[service, options]
	);

	useMount(() => {
		if (!options.manual) init(options.params);
	});

	const run = (params: Record<string, string>) => {
		return init(params);
	};

	return [loading, data, run];
};

export default useRequest;
