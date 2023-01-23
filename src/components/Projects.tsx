import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const data = [
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ]

  return (
    <section className='mt-12'>
      <h2 className='font-bold text-3xl mb-8 dark:text-white'>
        <span className='dark:text-primary-focus text-secondary'>Proyectos</span> Recientes</h2>
      {
        data.map(project => (
          <ProjectCard
            key={project.title} 
            {...project}
          />
        ))
      }
    </section>
  )
};
