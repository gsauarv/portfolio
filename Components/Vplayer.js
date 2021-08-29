import ReactPlayer from "react-player";
const Vplayer = ({ videoUrl }) => {
  return <ReactPlayer url={videoUrl} controls width="100%" height="100%" />;
};

export default Vplayer;
