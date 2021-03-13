import React from 'react'
import './NewsCard.css'
export const NewsCard = (props) => {
    console.log(props.url)
    return (
        <div className='card'>
            <span>{props.title}</span>
            <a href={props.url}><img alt='' src={props.urlToImage} /></a>
        </div>
    )
}

