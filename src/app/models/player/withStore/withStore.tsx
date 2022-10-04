import React, {useReducer} from "react";
import {IPlayerViewProps, TPlayerViewState, TPlayerAction, IPlayerStore} from "../../../../interfaces";

export function withStore(Component:React.FC<IPlayerViewProps>) {
    return function ({player}:IPlayerViewProps) {
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

        player.setStore(playerStore);

        return <Component player={player} state={state}/>
    }
}
