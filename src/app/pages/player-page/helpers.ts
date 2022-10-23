import { MediaPlayerMode } from "app/components";
import { IMediaFile, MediaFile } from "app/models";
import cat1 from "app/assets/adorable-kitty-with-monochrome-wall-behind-her.jpg"
import cat2 from "app/assets/grey-kitty-with-monochrome-wall-behind-her.jpg"
import cat3 from "app/assets/kitty-with-monochrome-wall-behind-her.jpg"

const filePath = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png";
const storiesPath = [cat1, cat2, cat3];

export const getFiles = (type: MediaPlayerMode): IMediaFile[] => {
    switch (type) {
        case MediaPlayerMode.Video: {
            return [new MediaFile({ type: "MP4", name: "BigBuckBunny", path: filePath, poster })]
        }
        case MediaPlayerMode.Stories: {
            return storiesPath.map((path, index) => new MediaFile({ type: "JPG", name: `Cat-${index + 1}`, path, poster: path }))
        }
    }
}
