import React from "react";
import ReactPlayer from "react-player";


const Player = () => (
    <div className="aspect-w-16 aspect-h-16">
        <ReactPlayer
            url="https://vimeo.com/605991465"
            playing={true}
            width={900}
            height={800}
            controls={true}
        />
    </div>
);


export default Player;