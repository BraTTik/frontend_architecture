import React, { MutableRefObject } from "react";
import {AudioType, IPlayer, VideoType} from "interfaces";
import { createPlayer } from "app/models/player-factory";
import "./media-player.scss";

type MediaPlayerProps<T extends AudioType | VideoType> = { type: T, player: MutableRefObject<IPlayer<T> | null> }

export const MediaPlayer = React.memo(<T extends AudioType | VideoType>(props: MediaPlayerProps<T>) => {
    const { type } = props
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (containerRef.current && type) {
            props.player.current = createPlayer(type, containerRef.current);
        }
        return () => {
            props.player.current?.destroy();
        }
    }, [type]);

    return (
        <div ref={containerRef} className="media-player" />
    )
})
