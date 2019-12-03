import React from 'react';
// Styles
import './home-layout.css';

function HomeLayout(props) {
    return (
        <section className="HomeLayout">
            {props.children}
        </section>
    )
}

export default HomeLayout;