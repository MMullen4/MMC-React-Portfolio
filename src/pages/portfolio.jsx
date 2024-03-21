export default function Portfolio() {
    const projects = [  // Array of objects containing project details
        {
            title: 'Mullys Text Editor',
            description: 'A simple text editor that can be downloaded and saved to your local machine.',
            image: "./assets/images/JATE SS.png",
            repo: "https://github.com/MMullen4/Mully-s-Text-Editor",
            deployed: "https://mully-s-text-editor.onrender.com/"
        },
        {
            title: 'Weather Dashboard',
            description: 'This is a weather dashboard that uses the OpenWeather API to retrieve weather data for cities. It also uses local storage to save the last city searched.',
            image: "./assets/images/Weather DB.png",
            repo: "https://github.com/MMullen4/Weather-app",
            deployed: "https://mmullen4.github.io/Weather-app/"
        },
        {
            title: 'Local Restaurant Guide',
            description: 'This is a local restaurant guide that uses the OpenWeather and Google API to retrieve local weather and restaurant data for your chosen cuisine.',
            image: "./assets/images/LRG Screenshot.png",
            repo: "https://github.com/EdwardBecerra2/Local-Restaurant-Guide-",
            deployed: "https://edwardbecerra2.github.io/Local-Restaurant-Guide-/"
        },
        {
            title: 'Password Generator',
            description: 'This is a password generator that generates a random password based on user input.',
            image: "./assets/images/Password Generator.png",
            repo: "https://github.com/MMullen4/pw-generate",
            deployed: "https://mmullen4.github.io/pw-generate/"
        },
        {
            title: 'Work Day Scheduler',
            description: 'This is a work day scheduler that allows users to save events to the calendar.',
            image: "./assets/images/Work Day Scheduler.png",
            repo: "https://github.com/MMullen4/Work-Day-Scheduler",
            deployed: "https://mmullen4.github.io/Work-Day-Scheduler/"  // Add more projects as needed.

        },
    ];
    return (
        <div>
            <h1>Portfolio</h1>
            {projects.map((project) => ( // Map through the projects array and display the details of each project.
                <div key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="imageContainer">
                        <img style={{ width: "100%" }} src={project.image} alt={project.title} />
                    </div>
                    <a href={project.repo}>Repo</a>
                    <a href={project.deployed}>Deployed</a>
                </div>
            ))}
        </div>
    );
}