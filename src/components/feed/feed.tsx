import { Photo } from "@/actions/getPhotos";
import FeedPhotos from "./feedPhotos";

export default function Feed({ photos }: { photos: Photo[] }) {
    return (
        <div>
            <FeedPhotos photos={photos} />
        </div>
    );
}