import React from "react"
import "./AboutPage.css"
import pfp from "./pfp.jpg"

console.log(pfp)

export default function AboutPage() {
	return(
		<div className="MainBody">
			<div className="Card">
				<img src={pfp} alt="ornament" className="img"/>
				<p className="Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ligula ut justo sodales, 
				id eleifend sem mollis. Quisque massa felis, hendrerit non diam non, viverra pulvinar dolor. 
				Sed posuere lacinia neque, ac congue tortor consectetur id.</p>
			</div>
		</div>
		);
}