import React, {useReducer} from "react";
import {
    IPlayerViewProps,
    TPlayerViewState,
    TPlayerAction,
    IPlayerStore,
    IPlayerPresentationProps
} from "../../../../interfaces";

export function withStore<T extends IPlayerPresentationProps = IPlayerPresentationProps>(Component:React.FC<IPlayerViewProps>):React.FC {
    return function (props:T) {
        const initialState:TPlayerViewState = {
            playing: false,
        }
        function playerReducer(state:TPlayerViewState, action: TPlayerAction):TPlayerViewState {
            switch (action) {
                case 'play':
                    return {
                        ...state,
                        playing: true,
                    }
                case 'pause':
                    return {
                        ...state,
                        playing: false,
                    }
            }
        }
        const [state, dispatch] = useReducer(playerReducer, initialState);

        const playerStore:IPlayerStore = {
            state,
            dispatch
        }

        props.player.setStore(playerStore);

        return <Component {...props} state={state}/>
    }
}
