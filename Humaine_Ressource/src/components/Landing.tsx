const Landing = () => {
  return (
    <div className="container flex justify-between py-20">
      <div className="basis-[45%]">
        <h1 className="font-black text-[38px] leading-snug">
          MelinIQ HR: Where Talent Meets Technology.
        </h1>
        <p className="pt-10 text-lg">
          MelinIQ HR streamlines HR processes, enhances engagement, and empowers
          organizations with smart, intuitive tools.
        </p>
      </div>
      <div className="basis-[45%]">
        <img src="./src/assets/Landing.jpg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
