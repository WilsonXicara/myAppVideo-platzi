import React from 'react';
// Components
import Media from './media.js';
// Styles
import './playlist.css';

function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((playitem) => {
                    return <Media {...playitem}
                                  key={playitem.id}
                                  openModal={props.handleOpenModal} />
                })
            }
        </div>
    )
}

export default Playlist;