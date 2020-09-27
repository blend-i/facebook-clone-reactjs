import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from 'firebase/app';


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
           message: input,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           profilePic: user.photoURL,
           image: imageUrl,
           username: user.displayName,
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            
            <div className="messageSender__top">
                <Avatar src={user.photoURL} title={user.displayName}/>
                <form>
                    <input 
                    value={input}
                    onChange={(event) => setInput(event.target.value)} 
                    className="messageSender__input" 
                    placeholder={`What's on your mind,  ${user.displayName}?`}
                    type="text" />

                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" 
                    />
                    <button  onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>

            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender;
