import { videoData } from '../../constants/data';

const VideoGallery = () => {

    return (
        <>
        {videoData.map((gallery, index) => (
            <div className="col-xxl-6 text-center" key={gallery.id}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="400" src={gallery.link} frameborder="0" allowfullscreen/>
                </div>
            </div>
         ))}
        </>);
}

export default VideoGallery;