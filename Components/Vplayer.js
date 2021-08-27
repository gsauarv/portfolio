import ReactPlayer from "react-player";
const Vplayer = ({ videoUrl }) => {
  return (
    <ReactPlayer url={videoUrl} controls muted width="100%" height="100%" />
  );
};

export default Vplayer;
