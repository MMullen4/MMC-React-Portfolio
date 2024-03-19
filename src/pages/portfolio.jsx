export default function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is a description of project 1',
            image: "./assets/images/vite.svg",
            repo: "repolink goes here",
            deployed: "deployed link goes here"
        },
        {
            title: 'Project 2',
            description: 'This is a description of project 2',
            image: "./assets/images/vite.svg",
            repo: "repolink goes here",
            deployed: "deployed link goes here"
        },
        {
            title: 'Project 3',
            description: 'This is a description of project 3',
            image: "./assets/images/vite.svg",
            repo: "repolink goes here",
            deployed: "deployed link goes here"
        }
    ];
    return (
    <div>
            <h1>Portfolio</h1>
            {projects.map((project) => (
                <div key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.title} />
                    <a href={project.repo}>Repo</a>
                    <a href={project.deployed}>Deployed</a>
                </div>
             ))}
    </div>
  );
}