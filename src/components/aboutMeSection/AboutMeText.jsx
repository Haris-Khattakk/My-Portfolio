import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p>
        Hi, I’m Haris — a passionate Front-End Developer with strong expertise
        in building responsive layouts and clean, user-friendly interfaces. I
        specialize in React and have solid experience working with modern UI/UX
        tools like Figma to transform design ideas into pixel-perfect websites.
        My focus is on creating smooth user experiences, optimizing code for
        performance, and building real-world, scalable front-end solutions. I'm
        also an instructor dedicated to helping others grow in web development
        through hands-on projects and practical learning.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
