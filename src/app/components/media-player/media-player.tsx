import React from "react";
import { IPlayer } from "app/models";
import cn from "classnames";
import { VideoPlayer } from "app/components/video-player";
import { Modal } from "app/components/modal";
import { useConnectedPlayer } from "./use-connected-player";
import { StartButton } from "./media-player.start-button";
import {MediaPlayerMode} from "./media-player.constants";
import "./media-player.scss";
import {TabSwitch} from "app/components/tabs";
import {StoriesPlayer} from "app/components/stories-player";
import {Tab} from "app/components/tabs/tab-switch/tab";

type MediaPlayerProps = {
    player: IPlayer;
    mode: MediaPlayerMode;
}

export const MediaPlayer = (props: MediaPlayerProps) => {
    const { mode } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [isRolledUp, setIsRolledUp] = React.useState(false);
    const connectedPlayer = useConnectedPlayer(props.player);

    const handleStartPlay = () => {
        setIsOpen(true);
        connectedPlayer.play();
    };

    const handleClose = () => {
        setIsOpen(false);
        connectedPlayer.pause();
    };

    const toggleRollup = () => setIsRolledUp(prev => !prev);

    return (
        <div>
            { !isOpen && (
                <div className="media-player__button-wrapper">
                    <StartButton onClick={handleStartPlay} poster={connectedPlayer.getCurrentPosterSrc()} />
                </div>
            )}
            <Modal onClose={handleClose} className={cn(isRolledUp && "media-player__rolled")} isOpen={isOpen}>
                <TabSwitch value={mode}>
                    <Tab value={MediaPlayerMode.Video}>
                        <VideoPlayer player={connectedPlayer} isRolledUp={isRolledUp} toggleRollup={toggleRollup} />
                    </Tab>
                    <Tab value={MediaPlayerMode.Stories}>
                        <StoriesPlayer player={connectedPlayer} />
                    </Tab>
                </TabSwitch>
            </Modal>
        </div>
    )
}
