import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './Beat.css'
const Beat = (props) => {

    return (
        <div className='player-wrapper'>
            <AudioPlayer
                header={props.file}
                src={`http://localhost:3001/download/${props.file}`} 
                customAdditionalControls={[]}
                progressUpdateInterval={50}
            />
        </div>
    )
}

export default Beat