import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/me/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Haris-Khattakk"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/hariskhattak.1?igsh=MXFzejhkZGlnZ3Fuag=="
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
