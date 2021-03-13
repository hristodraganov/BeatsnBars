import React, { useEffect, useState } from 'react'
import './Beats.css'
import Beat from '../beat/Beat'
import axios from 'axios'
const Beats = () => {
    const [songList, setSongList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/uploads')
            .then(res => res.data.map(item => setSongList(prevList => [...prevList, item])))
    }, [])
    return (
        <div>
            {songList.map(item => (
                <Beat file={item} />
            ))}
        </div>

    )
}

export default Beats
