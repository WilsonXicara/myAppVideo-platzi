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
    console.log(props.data);
    const categories = props.data.categories;
    return (
        <div>
            {
                categories.map((category) => {
                    const playlist = category.playlist;
                    return (
                        <div className="Playlist" key={category.id}>
                            <IconPlay size={50} color="red" />
                            <IconPause size={50} color="red" />
                            <IconVolume size={50} color="red" />
                            <IconFullScreen size={50} color="red" />
                            {
                                playlist.map((playitem) => {
                                    return <Media {...playitem} key={playitem.id} />
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Playlist;