import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path ,playing}, ref) => {
  const videoRef = useRef(true)

  useImperativeHandle(ref, () => ({
    changeBtn: () =>{
      if(playing){
        videoRef.current.play();
      }else{
        videoRef.current.pause();
      }
    }
  }));

  return (
    <video  ref={videoRef} style={{ maxWidth: "100%" }}>
      <source  src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(true);

  const ref = useRef(true);

  return (
    <div>
      <Video ref={ref} path="./sample.mp4" playing={playing}/>
      <button
        onClick={() => {
          setPlaying((prev) => !prev);
          ref.current.changeBtn()
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
