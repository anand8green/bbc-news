import React from 'react'
import { GlobalData } from '../GlobalState'

function NewsSection() {

    const [{ newsArticle }] = GlobalData()

    console.log(newsArticle);

    return (
        <div>
            {
                newsArticle.map(news => (
                    <div>
                        <h1>{news.title}</h1>
                        <p>{news.description}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default NewsSection
