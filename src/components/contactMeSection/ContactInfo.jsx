import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="harisnawaz173@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+92 3365055526" Image={FiPhone} />
      <SingleInfo text="Peshawar, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
