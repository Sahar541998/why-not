import {useCallback} from "react";

/**
 * Usage
 * const myAwesomePrefix  = usePrefix("Really Cool Prefix -");
 * const awesomeString: string = myAwesomePrefix("Awesome Content")
 * -> "Really Cool Prefix - Awesome Content"
 */
const usePrefix = (prefix: string) => {

    return useCallback((message: unknown, spaceAfterPrefix = true) => {
        return prefix + spaceAfterPrefix ? " " : "" + message.toString()

    }, [])
}

export default usePrefix
