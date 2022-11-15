import React from "react";
import "./News.css";

export default class FetchNewsArticle extends React.Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "q=Apple&" +
      "from=2022-10-14&" +
      "sortBy=popularity&" +
      "apiKey=8c6d95abf36045d1aa05e7b4c0211ff8";

    const response = await fetch(url);
    const data = await response.json();

    this.setState({ articles: data.articles, loading: false });

    console.log(data);
    /* this.state.articles.map((article) => console.log(article)) */
  }

  render() {
    return (
      <div>
        <section className="Grid">
          {this.state.articles.map((article, index) => (
            <div key={index} className="NewsCard">
              <img
                key={index}
                className="Image"
                src={article.urlToImage}
                alt="Photo"
              />
              <p key={index} className="title">
                {article.title}
              </p>
              <p key={index} className="text">
                {article.author}
              </p>
              <button className="btn">
                <a key={index} href={article.url} className="url">
                  READ MORE!!
                </a>
              </button>
            </div>
          ))}
        </section>
        <h1>hiiiiiiii</h1>
      </div>
    );
  }
}
