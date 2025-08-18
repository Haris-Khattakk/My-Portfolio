import { image } from "framer-motion/client";
import { images } from "../../config/ImagesConfig";

const ExperienceTopMiddle = () => {
  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <img src={images.Experienceimg} alt="my experience" />
    </div>
  );
};

export default ExperienceTopMiddle;
