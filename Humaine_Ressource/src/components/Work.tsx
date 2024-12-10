import { RiBarChartFill } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Work = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="">
            <img src="./src/assets/Work.jpg" alt="" />
          </div>
          <div className="">
            <h2 className="font-black leading-snug text-4xl">
              Simplify Your Work and Reclaim Your Time!
            </h2>
            <p className="pt-10 text-lg">
              Streamline your daily tasks with smart tools designed to save time
              and boost efficiency, letting you focus on what truly matters.
            </p>
            <ul className="pt-6">
              <li className="flex items-center gap-6 text-2xl font-bold mt-10 cursor-pointer">
                <RiBarChartFill /> Productivity &gt;{" "}
              </li>
              <li className="flex items-center gap-6 text-2xl font-bold mt-10 cursor-pointer">
                <FiZap /> Speed &gt;
              </li>
              <li className="flex items-center gap-6 text-2xl font-bold mt-10 cursor-pointer">
                <FaCheckCircle /> Confidentiality &gt;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
