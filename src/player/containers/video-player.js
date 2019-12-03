import React, {Component} from 'react';
// Components
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
// Utilities
import formattedTime from '../../utils/utilities';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: true
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
            duration: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        this.video = event.target;
        this.setState({
            currentTime: formattedTime(this.video.currentTime)
        })
    }
    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    }
    handleSeeking = event => {
        // Cuando el componente empieza a cargar
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        // Cuando el componente deja de cargar
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    }
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.playerLayout.webkitRequestFullScreen();
        } else {
            this.playerLayout.webkitExitFullscreen();
        }
    }
    setRef = element => {
        this.playerLayout = element;
    }
    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title="Esto es un video chido!"/>
                <VideoPlayerControls>
                    <PlayPause pause={this.state.pause}
                               handleClick={this.togglePlay} />
                    <Timer duration={formattedTime(this.state.duration)}
                           currentTime={this.state.currentTime} />
                     <ProgressBar duration={this.state.duration}
                                  value={this.state.currentTime}
                                  currentTime={this.state.currentTime}
                                  handleProgressChange={this.handleProgressChange} />
                    <Volume handleVolumeChange={this.handleVolumeChange} />
                    <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
                </VideoPlayerControls>
                <Spinner isLoading={this.state.loading} />
                
                <Video autoplay={this.props.autoplay}
                       pause={this.state.pause}
                       handleLoadedMetadata={this.handleLoadedMetadata}
                       handleTimeUpdate={this.handleTimeUpdate}
                       handleSeeking={this.handleSeeking}
                       handleSeeked={this.handleSeeked}
                       src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;