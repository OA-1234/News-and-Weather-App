import React from "react";
import "./News.css"

const articles_query = '{ articles: [{author, title, description, urlToImage}]}'

export default class FetchNewsArticle extends React.Component {
    

    async componentDidMount() {
        const url = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    'apiKey=4HMlWG1bMf1dS2dqlZtN80zQdEku9zmkrQfZu9sX2EL15f0V';

        const response = await fetch(url, /*{
            method: "POST",
            Origin: 'http://localhost:3000',
            body: JSON.stringify({ query: articles_query})
        }*/);
		const data = await response.json();
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}