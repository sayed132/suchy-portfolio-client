import { useQuery } from "@tanstack/react-query";
import Education from "../Education/Education";

const AboutMe = () => {

  const {data: user = [], refetch} = useQuery({
    queryKey: ['about'],
    queryFn:  async ()=>{
      const res = await fetch("https://suchy-portfolio-server.onrender.com/profile");
      const data = await res.json();
      console.log(data, "profile");
      return data.user[0]
    }
  })

  return (
    <div id="about" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-44 " src="what-ido.svg" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl text-center font-bold tracking-widest">
          LET ME INTRODUCE MYSELF
        </h2>
      </div>
      <div>
        <div className="lg:text-start lg:px-80 py-5 mx-auto">
          <h1 className="text-xl font-bold uppercase tracking-widest">
           Hi. My name is {user?.name}. I am from Bangladesh
          </h1>
          <p className="tracking-widest mt-2 font-semibold capitalize">
            {user?.aboutMe}.
          </p>
          <p></p>
        </div>
       

       <Education/>
      </div>
    </div>
  );
};

export default AboutMe;
