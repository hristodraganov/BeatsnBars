import React, { useEffect, useState } from 'react'
import './Home.css'
import asap from '../../img/asap.jpg'
import swae from '../../img/swae.jpg'
import travis from '../../img/travis.jpg'
import dababy from '../../img/dababy.jpg'
import ferg from '../../img/ferg.jpg'
import YouTube from 'react-youtube-embed'
import { NewsCard } from '../newscard/NewsCard'
import axios from 'axios'

const NEWS_API_KEY = 'ea8a070eeaf6456793c595a769206a4c'
const Home = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(`http://newsapi.org/v2/everything?q=rap&from=${Date.now()}&sortBy=popularity&apiKey=${NEWS_API_KEY}`)
            .then(res => setNews(res.data.articles.slice(0, 5)))
    }, [])
    return (
        <main>

            <section className='carousel'>

                <div id='slider'>
                    <figure>
                        <img alt='' src={asap}></img>
                        <img alt='' src={swae}></img>
                        <img alt='' src={travis}></img>
                        <img alt='' src={ferg}></img>
                        <img alt='' src={dababy}></img>
                    </figure>
                </div>
                <h1 className='carousel-header'>Welcome to Beats n bars</h1>
            </section>

            <section className='week-song'>
                <h1 className='mt-4 mb-4'>Song of the week</h1>
                <YouTube
                    id='OPDCaQ7mqCg'
                    className='yt-player'
                />
            </section>
            <section className='news'>
                <h1 className='news-title'>Rap news from the world</h1>
                <div className='news-container'>
                    {
                        news.map(item => (
                            <NewsCard
                                title={item.title}
                                url={item.url}
                                urlToImage={item.urlToImage}
                            />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Home
