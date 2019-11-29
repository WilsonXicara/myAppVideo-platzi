import React from 'react';
import Media from './media.js';
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