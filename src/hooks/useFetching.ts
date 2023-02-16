import { useState } from "react"

export const useFetching = (callback : Function) : [Function, boolean] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetching = async () => {
        setIsLoading(true);
        
        await callback();

        setIsLoading(false);
    }

    return [fetching, isLoading];
}