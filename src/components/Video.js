import React, { Component } from "react";
import video1 from "./video.mp4";

export default class Video extends Component {
  render() {
    return (
      <div className="video">
        <video width="100%" height="500" controls autoPlay>
          <source src={video1} type="video/mp4" />
         
          Ici l'alternative à la vidéo : un lien de téléchargement, un message,
          etc.
        </video>
      </div>
    );
  }
}
