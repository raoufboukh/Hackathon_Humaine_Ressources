const Landing = () => {
  return (
    <section className=" py-[85px]">
      <div className="container flex justify-between">
        <div className="basis-[45%]">
          <h1 className="font-black text-[38px] leading-snug">
            MelinIQ HR: Where Talent Meets Technology.
          </h1>
          <p className="pt-10 text-lg">
            MelinIQ HR streamlines HR processes, enhances engagement, and
            empowers organizations with smart, intuitive tools.
          </p>
          <div className="flex font-bold items-center gap-2  mt-10">
            <button className="bg-buttonColor text-white hover:bg-transparent hover:text-black  transition-all duration-300 border-4 border-buttonColor px-5 py-2 rounded-3xl">
              Explorer Services
            </button>
            <button className="border-4 border-buttonColor hover:text-white hover:bg-buttonColor transition-all duration-300 px-5 py-2 rounded-3xl ">
              Why MelinIQ ?
            </button>
          </div>
        </div>
        <div className="basis-[45%]">
          <img src="./src/assets/Landing.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
