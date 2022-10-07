import React from "react";
import { Button } from "app/components/button";

export const StartButton = (props: { poster?: string; onClick: () => void; }) => {
    const { poster, onClick } = props;

    return <Button
        className="media-player__start-button"
        onClick={onClick}
        content={poster ? <img src={poster} alt="video poster" /> : <div>Button</div>}
    />
}
