import React from "react"
import './NewsPage.css'
import FetchNewsArticle from "./NewsAPI/News";


export default function News() {
	return (
	<div>
		<h1 className="head">NEWS</h1>
		<FetchNewsArticle/>
	</div>

		);
}

