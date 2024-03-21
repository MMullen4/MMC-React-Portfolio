import { Link } from "react-router-dom";
// import "./About.css";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <card>
        <h1>Matt Mullen</h1>
        <h2>Owner</h2>
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="./assets/images/MM.jpg" alt="Matt Mullen" />
        
        <p> With over 20 years in Paperboard manufacturing & sales to a wide array of printers, packagers, and various converters of paperboard, Matt brings his industry experience and knowledge to find solutions for clients that satisfy their need to expand and penetrate target markets.
          In his spare time, Matt enjoys the outdoors with his family.  He also volunteers as a Court Appointed Special Advocate (CASA) in LA County, whose goals are to help children subjected to neglect and abuse.
        </p>
      </card>
      <Link to="https://www.linkedin.com/in/matthewmullen1/">LinkedIn</Link>
    </div>
  );


} 