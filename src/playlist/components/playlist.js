import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component {
    render() {
        console.log(this.props.data);
        const categories = this.props.data.categories;
        return (
            <div>
                {
                    categories.map((category) => {
                        const playlist = category.playlist;
                        return (
                            <div className="Playlist">
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
}

export default Playlist;