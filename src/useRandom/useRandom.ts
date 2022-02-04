import {useCallback} from "react";

const useRandom = (min: number, max: number): () => number => {

    return useCallback(() => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }, []);
};

export default useRandom;
