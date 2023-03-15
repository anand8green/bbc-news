import React from 'react'
import { GlobalData } from '../GlobalState'
import NewsItem from './NewsItem';

function NewsSection() {

    const [{ isLoading, newsArticle }] = GlobalData()

    if (isLoading) {
        return <span className='loading'> Loading...</span>

    } else {

        return (<div className="card">
            {
                newsArticle.map(news => (

                    <NewsItem {...news} />

                ))
            }
        </div>

        )
    }

}

export default NewsSection
