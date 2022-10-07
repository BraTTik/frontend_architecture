import {useMemo, useReducer} from "react";
import {IPlayerStore, PlayerState, PlayerActions} from "interfaces";


type PlayerActionType = "play" | "pause" | "rollup" | "rolldown";

const initialState: PlayerState = {
    isPlaying: false,
    isRolledUp: false,
}

const storeReducer = (state: PlayerState, action: PlayerActionType) => {
    switch(action) {
        case "play": {
            return { ...state, isPlaying: true }
        }
        case "pause": {
            return { ...state, isPlaying: false }
        }
        case "rollup": {
            return { ...state, isRolledUp: true }
        }
        case "rolldown": {
            return { ...state, isRolledUp: false }
        }
    }
}

export const useMediaPlayerStore = (): IPlayerStore => {
    const [state, dispatch] = useReducer(storeReducer, initialState);

    const actions: PlayerActions = useMemo(() => ({
        setIsPlaying: (isplaying: boolean) => {
            isplaying ? dispatch("play") : dispatch("pause")
        },
        setIsRolledUp: (isrolled: boolean) => {
            isrolled ? dispatch("rollup") : dispatch("rolldown")
        }
    }), [dispatch]);

    return { state, actions }
}