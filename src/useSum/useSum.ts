import {useMemo} from "react";

const useSum = (...numbers: number[]): number => {

    return useMemo(() => {
        return numbers.reduce((previousValue: number, currentValue: number) => {
            return previousValue + currentValue;
        }, 0)
    }, [numbers])
};

export default useSum;
