import React, {Component} from 'react';
// Components
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
// Utilities
import formattedTime from '../../utils/utilities';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause,
        })
    }
    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;  // Quien dispara el evento
        this.setState({
            duration: formattedTime(this.video.duration)
        })
    }
    handleTimeUpdate = event => {
        this.setState({
            currentTime: formattedTime(this.video.currentTime)
        })
    }
    render() {
        return (
            <VideoPlayerLayout>
                <Title title="Esto es un video chido!"/>
                <VideoPlayerControls>
                    <PlayPause pause={this.state.pause}
                               handleClick={this.togglePlay} />
                    <Timer duration={this.state.duration}
                           currentTime={this.state.currentTime} />
                </VideoPlayerControls>
                
                <Video autoplay={this.props.autoplay}
                       pause={this.state.pause}
                       handleLoadedMetadata={this.handleLoadedMetadata}
                       handleTimeUpdate={this.handleTimeUpdate}
                       src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;