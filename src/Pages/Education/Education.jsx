import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  const { data: education = [], refetch } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const res = await fetch(
        "https://suchy-portfolio-server.onrender.com/edu/all"
      );
      const data = await res.json();
      console.log(data, "profile");
      return data.education;
    },
  });

  return (
    <section className=" ">
      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <h2 className="text-2xl font-bold md:text-4xl">Education/Course</h2>
        <div className="space-y-8">
          {education?.map((edu) => (
            <div key={edu._id}>
              <h3 className="mb-3 text-lg font-bold md:text-xl">{edu.time}</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:text-violet-600"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">{edu?.title}</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-600 ">
                    <p>
                    <span className="font-bold">Institution: </span> <span>{edu?.instName}</span>
                    </p>
                    <p>
                    <span className="font-bold">Address: </span> <span>{edu?.address}</span>{" "}
                    </p>
                    <Link
                      target="_blank"
                      to={edu?.certificate}
                      className="pr-3 cursor-pointer font-bold hover:text-blue-700 duration-700"
                    >
                        
                      Certificate
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
