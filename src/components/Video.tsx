import video from '../assets/video/video.mp4';

export default () => {
  return(
    <div className="w-full mt-5">
      <video src={video} autoPlay={true} className="rounded-md w-full"/>
    </div>
  );
}