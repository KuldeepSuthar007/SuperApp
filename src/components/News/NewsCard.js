import React, { useState, useEffect } from 'react'
import Newsitems from './Newsitems';



function NewsCard(props) {

    const [articles, setArticles] = useState([])
    const max = 1;

    const updateNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?&apikey=8aee70befef526833fc9c30cc4340780&max=${max}&country=in`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)

    }
    useEffect(() => {
        updateNews();

    }, [])

    return (
        <>
            {articles.map((element) => {
                return <div key={element.url}>
                    <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image} date={element.publishedAt} />
                </div>
            })}

        </>
    )



}

export default NewsCard