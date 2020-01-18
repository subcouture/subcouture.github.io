import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
		<Thumbnail
		  link="/glinskis"
		  image="https://steamuserimages-a.akamaihd.net/ugc/939462533604640086/97BC8C0CEA11723E183B2F0187E32D5090488577/"
		  title="Glinski's Hexagonal Chess"
		  category="Game Mod"
		/>
		 
		<Thumbnail
		  link="/airbnb"
		  image="http://airbnb-image-url.jpg"
		  title="Airbnb Experiences"
		  category="Website"
		/>
		 
		<Thumbnail
		  link="/photoshop"
		  image="http://photoshop-image-url.jpg"
		  title="Photoshop Redesign"
		  category="Desktop App"
		/>
		
    </div>
  )
}
 
export default Projects;