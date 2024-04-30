import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Portfolio = () => {

const {data: portfolio = [], refetch} = useQuery({
  queryKey: ['all-portfolio'],
  queryFn:  async ()=>{
    const res = await fetch("https://suchy-portfolio-server.onrender.com/portfolio/all");
    const data = await res.json();
    return data
  }
})

  return (
    <div id="portfolio" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center lg:my-28 my-12 mx-auto">
        <img className=" " src="work3.png" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          Here Is My Work Sample
        </h2>
      </div>
      <div className="grid  gap-4 cursor-pointer  grid-cols-12">
        {portfolio?.portfolio?.map((item) => (
          <div
            key={item?._id}
            className="p-4 col-span-full sm:col-span-6 lg:col-span-4 shadow-2xl bg-[#0B1120]  font-sans rounded-xl transition-transform hover:scale-105"
          >
            <div className="flex justify-center w-full h-56 object-center  sm:h-48">
              <img
                className="rounded-lg bg-black/40 w-full h-full"
                src={item?.image}
                alt="img"
              />
            </div>
            <div className="text-start  mx-auto lg:font-semibold mt-2">
              <h6 className="text-md md:text-lg text-wrap">{item?.name}</h6>
              <p className="text-xs md:text-md text-wrap">
                {item?.desc.slice(0, 100)}
                {item.desc.length > 100 && "..."}
              </p>
            </div>
            <div className="mt-5">
              <Link className="uppercase" to={`/portfolio/${item?._id}`}>
                <button className="bg-orange-500 uppercase font-semibold px-3 py-1.5 rounded-md">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
