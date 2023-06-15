import { useEffect } from "react";

const useMount = (fn: () => void) => {
	useEffect(() => {
		fn?.();
	}, [fn]);
};

export default useMount;
