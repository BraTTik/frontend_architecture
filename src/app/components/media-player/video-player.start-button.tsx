import React from "react";
import { Button } from "app/components/button";
import "./media-player.scss";

export const StartButton = (props: { poster?: string; onClick: () => void; }) => {
    const { poster, onClick } = props;

    return (
        <div className="video-player__start-button__wrapper">
            <Button
                className="video-player__start-button"
                onClick={onClick}
                content={poster ? <img src={poster} alt="video poster" /> : <div>Button</div>}
            />
        </div>
    )
}
