import React, { Component } from 'react';
import './videoPlayer.scss';

export default class videoPlayer extends Component {
  state = {
    loadPlayer: false,
  }

  generateiFrame = () => {
    this.setState({
      loadPlayer: true
    }, () => {
      const { 
        videoID, 
        allowFullScreen = 1, 
        AutoPlay = 1, 
        ShowInfo = 0, 
        ModestBranding = 0, 
        referID = 'videoContainer', 
      } = this.props;
      const iframe = document.createElement('iframe');
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoID}?rel=0&mute=1&showinfo=${ShowInfo}&allowfullscreen=${allowFullScreen}&autoplay=${AutoPlay}&modestbranding=${ModestBranding}&cc_load_policy=1&cc_lang_pref=en`);
      const element = this.refs[referID];
      element.appendChild(iframe);
    });
  }

  render() {
    const { loadPlayer } = this.state;
    const { referID, thumbnail, videoID, id  } = this.props;
    const imageSrc = thumbnail || `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`;

    return(
      <div className="videoplayer youtube" >
        {!loadPlayer ?
          <img rel="preconnect" src={imageSrc} /> :
          <div className="videoContainer" ref="video-player" ref={referID || 'videoContainer'} />
        }
        {!loadPlayer && <div className="play-button" onClick={this.generateiFrame} id={id}/>}
      </div>
    )
  }
}