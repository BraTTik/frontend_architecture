import {useMemo, useReducer} from "react";
import {IPlayer, IPlayerStore, PlayerState} from "app/models/player";

type PlayerActionType = "play" | "pause";

const initialState: PlayerState = {
    isPlaying: false,
}

const storeReducer = (state: PlayerState, action: PlayerActionType) => {
    switch(action) {
        case "play": {
            return { ...state, isPlaying: true }
        }
        case "pause": {
            return { ...state, isPlaying: false }
        }
    }
}

export const useMediaStore = (): IPlayerStore => {
    const [state, dispatch] = useReducer(storeReducer, initialState);

    return useMemo(() => ({
        state,
        actions: {
            setIsPlaying: (isplaying: boolean) => {
                isplaying ? dispatch("play") : dispatch("pause")
            }
        }
    }), [dispatch, state])
}

export const useMediaPlayer = (player: IPlayer) => {
    const store = useMediaStore();
    player.addStore(store);
    const { state: { isPlaying } } = store;

    return { player, isPlaying };
}
