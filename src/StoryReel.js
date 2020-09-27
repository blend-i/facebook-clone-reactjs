import React from 'react';
import "./StoryReel.css";
import Story from "./Story.js";


function StoryReel() {
    return (
        <div className="storyReel">

            <Story
            image="https://a-static.besthdwallpaper.com/league-of-legends-lol-vayne-fantasy-kunst-tapet-1080x1920-23798_165.jpg"
            profileSrc="https://i.pinimg.com/originals/30/0e/58/300e58c8416a68dcfcf1761501348243.jpg"
            title="League of Legends"
            />

            <Story
            image="https://i.pinimg.com/originals/34/4c/8c/344c8c87cf9bf9299eb021e4f8596ed4.jpg"
            profileSrc="https://www.clipartmax.com/png/middle/226-2261836_other-discord-transparent-server-icon-images-world-of-warcraft-discord-logo.png"
            title="World of Warcraft"
            />

            <Story
            image="https://wallpapercave.com/wp/wp1809698.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg"
            title="Overwatch"
            />

            <Story
            image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/33836086/1f9249103f371671071532e02e3ab39d2da49cbe.png"
            profileSrc="https://pbs.twimg.com/media/Eij4M3LUMAA1Nf3.jpg"
            title="Among us"
            />

        </div>
    )
}

export default StoryReel;
