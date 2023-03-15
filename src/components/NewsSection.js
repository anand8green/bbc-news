import React from 'react'
import { GlobalData } from '../GlobalState'

function NewsSection() {

    const [{ isLoading, newsArticle }] = GlobalData()

    console.log(newsArticle);

    if (isLoading) {
        return <h1> Loading...</h1>
    } else {

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

}

export default NewsSection
