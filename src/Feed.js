import React, { useState, useEffect } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
        );
    }, []);
    



    return (
        <div className="feed">

            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post 
                key={post.id}
                message={post.data.message}
                username={post.data.username}
                image={post.data.image}
                profilePic={post.data.profilePic}
                timestamp={post.data.timestamp}
                />
            ))}

        </div>
    )
}

export default Feed;
