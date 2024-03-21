export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <card>
        <h1>Matt Mullen</h1>
        <h2>Owner</h2>
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/assets/images/MM.jpg." alt="Matt Mullen" />
        {/* <img src=".assets/images/MM.png" alt="Matt Mullen" /> */}
        
        <p> With over 20 years in Paperboard manufacturing & sales to a wide array of printers, packagers, and various converters of paperboard, Matt brings industry experience and knowledge together to find solutions for clients that satisfy their needs to expand and penetrate their target markets.
          In his spare time, Matt enjoys the outdoors with his family.  He also volunteers as a Court Appointed Special Advocate (CASA) in LA County, whose goals are to help children subjected to neglect and abuse.
        </p>
      </card>
    </div>
  );


} 