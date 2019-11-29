import React from 'react';
// Components
import Media from './media.js';
import IconPlay from '../../icons/components/icon-play';
import IconPause from '../../icons/components/icon-pause';
import IconVolume from '../../icons/components/icon-volume';
import IconFullScreen from '../../icons/components/icon-full-screen';
// Styles
import './playlist.css';

function Playlist(props) {
    return (
        <div className="Playlist">
            <IconPlay size={50} color="red" />
            <IconPause size={50} color="red" />
            <IconVolume size={50} color="red" />
            <IconFullScreen size={50} color="red" />
            {
                props.playlist.map((playitem) => {
                    return <Media {...playitem} key={playitem.id} handleClick={props.handleOpenModal} />
                })
            }
        </div>
    )
}

export default Playlist;