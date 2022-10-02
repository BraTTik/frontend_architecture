import { IMediaFile } from "interfaces/file";

export interface IPlayer {
    play(): this;
    pause(): this;
    load(file: IMediaFile | IMediaFile[]): this;
    destroy(): void;
}

export interface ReactPlayer<P  extends Record<string, any> = {}> extends IPlayer {
    render(props?: P): React.ReactElement;
}
