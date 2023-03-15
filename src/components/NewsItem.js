import React from 'react'

function NewsItem({ title, description, urlToImage, url }) {
    return (
        <div className="card_item" onClick={() => url}>
            <div className="pic">
                <img
                    src={urlToImage}
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
