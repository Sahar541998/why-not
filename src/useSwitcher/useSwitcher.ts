import {useCallback, useState} from "react";

const useSwitcher = (initialSwitcherState: boolean): [switcherState: boolean, doSwitch: () => void] => {
    const [switcherState, setSwitcherState] = useState(initialSwitcherState);

    const doSwitch = useCallback(() => {
        setSwitcherState((prevSwitcherState) => (!prevSwitcherState));
    }, []);

    return [switcherState, doSwitch];
};

export default useSwitcher;
