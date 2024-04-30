import { useQuery } from "@tanstack/react-query";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {

  const {data: user = [], refetch} = useQuery({
    queryKey: ['contact'],
    queryFn:  async ()=>{
      const res = await fetch("https://suchy-portfolio-server.onrender.com/profile");
      const data = await res.json();
      console.log(data, "profile");
      return data.user[0]
    }
  })


  return (
    <footer className="px-4   bg-gradient-to-r from-[#0C1222] to-[#0B1220] rounded-t-md md:flex items-center justify-around">
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2024 All rights reserved. Sanjida Suchy
      </div>
      <div className="flex justify-center items-center pb-4 md:pb-0">
            <div className="flex items-center">
            <Link
              target="_blank"
              to={user?.facebook}
              className="h-[24px] w-[24px] mr-2 bg-blue-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <FaFacebookF className="text-white text-sm flex items-center"/>
            </Link>
            <Link
              target="_blank"
              to={user?.linkedin}
              className="h-[24px] w-[24px] mr-2 bg-sky-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
                <FaLinkedinIn className="text-white text-sm flex items-center"/>
            </Link>
            <Link
              target="_blank"
              to={user?.instagram}
              className="h-[24px] w-[24px] mr-2 bg-pink-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
                <FaInstagram className="text-white text-sm flex items-center"/>
            </Link>
            <Link
              target="_blank"
              to={user?.twitter}
              className="h-[24px] w-[24px] bg-black flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
                <RiTwitterXFill className="text-white text-sm flex items-center"/>
            </Link>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
