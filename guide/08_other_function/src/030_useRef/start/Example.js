import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const [play, setPlay] = useState(true);
  const myRef = useRef(null);
  const videoRef = useRef(null);

  const startVideo = () =>{
    setPlay(!play)
    if(play){
      videoRef.current.play()
    }
    else{
      videoRef.current.pause()
    }
  }

  // play
  const playVideo = () =>{
    if(videoRef.current){
      videoRef.current.play()
    }
  }

  const stopVideo = () =>{
    if(videoRef.current){
      videoRef.current.pause()
    }
  }

  const resetVideo = () =>{
    if(videoRef.current){
      videoRef.current.currentTime = 0;
    }
  }


  const videoStyle = {
    width: "100%"
  }

  return (
    <>
      <div>
        <h3>ユースケース1</h3>
        <input ref={myRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={()=>{myRef.current.focus()}}>
          インプット要素をフォーカスする
        </button>
      </div>
      <div>
      <h3>ユースケース2</h3>
      {/* reactはbuildされて動作するのでpublicフォルダにいる前提でパス発長う */}
      <video ref={videoRef} style={videoStyle} src="./sample.mp4"/>
      <button onClick={startVideo}>{play? "play" : "stop"}</button>
      <button onClick={stopVideo}>Stop</button>
      <button onClick={resetVideo}>Reset</button>
      </div>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
