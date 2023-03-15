import React from 'react'
import imageHolder from '../assets/breaking_news.png'

function NewsItem({ title, description, urlToImage = imageHolder, url }) {
    return (
        <div className="card_item" onClick={() => url}>
            <div className="pic">
                <img
                    src={urlToImage || imageHolder}
                    alt=""
                    className='pic'
                />
            </div>
            <div className='content'>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <a href={url} target="_blank" className='readMore'> Read more</a>

            </div>

        </div>
    )
}

export default NewsItem
