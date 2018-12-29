import React from 'react'
import useResources from './useResources'
import ReactHtmlParser from 'react-html-parser';

const ArticleList = ({query}) => {
    const articles = useResources(query)
    console.log(articles.length)


    return (
            <ul>
                { 
                    articles.map(article => (
                        <li key={article.pageid}>
                            <h3>{article.title}</h3>
                            <p>{ReactHtmlParser(article.snippet)}</p>
                        </li>
                    ))
                }
            </ul>
        
    )
}

export default ArticleList