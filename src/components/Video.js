import React, {Component} from 'react';
import '../css/video.css';

class Video extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: '../assets/hero.mp4',
      mp4: '../assets/Long_shot/Long_shot.mp4',
      ogv: '../assets/Long_shot/Long_shot.ogv',
      webm: '../assets/Long_shot/Long_shot.webm',
      jpg: '../assets/Long_shot/Long_shot.jpg'
      // videoURL: "https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
    }
  }

  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src='../../assets/Long_shot/Long_shot.mp4' type="video/mp4" />
        <source src={this.state.webm} type="video/webm" />
      </video>
    )
  }
}

export default Video;
