import {useEffect} from "react";

const useLogChanges = (...paramsToLog: unknown[]) => {

    useEffect(() => {

        paramsToLog.forEach(param => console.log(param))
    }, [paramsToLog])
}

export default useLogChanges
