import {useEffect} from "react";

const useLogChange = (paramToLog: unknown) => {

    useEffect(() => {
        console.log(paramToLog)
    }, [paramToLog])
}

export default useLogChange
