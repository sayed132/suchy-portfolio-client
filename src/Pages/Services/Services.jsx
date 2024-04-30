import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Services = () => {

  const {data: service = [], refetch} = useQuery({
    queryKey: ['all-service'],
    queryFn:  async ()=>{
      const res = await fetch("https://suchy-portfolio-server.onrender.com/service/all");
      const data = await res.json();
      return data
    }
  })
  // const [service, setService] = useState([]);

  // useEffect(() => {
  //   fetch("https://suchy-portfolio-server.onrender.com/service/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService(data?.service);
  //       console.log(service, " loaded all service data");
  //     });
  // }, []);

  return (
    <div id="services" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-44 " src="what-ido.svg" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          What Can I Do?
        </h2>
      </div>
      <div className="grid  gap-4 cursor-pointer  grid-cols-12">
        {service?.service?.map((item) => (
          <div
            key={item._id}
            className="col-span-full sm:col-span-6 lg:col-span-4 p-4 shadow-2xl bg-[#0B1120]  font-sans rounded-xl transition-transform hover:scale-105"
          >
            <div className="flex justify-center w-full h-56 object-center  sm:h-48">
              <img
                className="rounded-lg bg-black/40 w-full h-full"
                src={item?.image}
                alt="img"
              />
            </div>
            <div className="text-start  mx-auto lg:font-semibold mt-2">
              <h6 className="text-xs md:text-lg text-wrap">{item?.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
