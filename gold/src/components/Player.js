import React from "react";
import ReactPlayer from "react-player";
import "./Player.css"

const Player = () => (
    <>
    <div className="player-wrapper">
        <ReactPlayer
            className="react-player"
            url="https://vimeo.com/605991465"
            playing={true}
            width="100%"
            height="100%"
            controls={true}
        />
    </div>
    </>
);


export default Player;