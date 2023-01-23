type Props = {
  title: string;
  image: string;
  technologies: string[];
  description: string;
}

export const ProjectCard = ({ title, image, technologies, description }: Props) => {
  const randomColor = () => {
    const colors = [
      'bg-red-500',
      'bg-yellow-500',
      'bg-green-500',
      'bg-orange-500',
      'bg-indigo-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-rose-500',
      'bg-emerald-500',
      'bg-cyan-500',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      className="flex rounded-md overflow-hidden mb-5 bg-gray-200 dark:bg-slate-800 group cursor-pointer max-h-40 h-32"
    >
      <img
        src={image}
        alt={title}
        className="object-cover h-full w-1/3"
      />
      <div className="p-2">
        <h3 className="text-xl dark:text-white font-bold dark:group-hover:text-accent-focus group-hover:text-primary-focus mb-2 transition-colors gap-2 items-center inline-block mr-2">{title}</h3>
        {
          technologies.map(technology => (
            <span
              key={technology}
              className={`text-xs ${randomColor()} dark:text-white rounded-md px-2 py-1 mr-2`}
            >
              {technology}
            </span>
          ))
        }
        <p
          className=""
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum incidunt hic numquam, a magni voluptates non et quod! Repudiandae ipsum ad voluptas aliquid aliquam voluptates aperiam maxime, voluptatum saepe.ipsum</p>
      </div>
    </div>
  )
};
