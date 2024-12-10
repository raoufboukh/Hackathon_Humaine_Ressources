import { IoLogOut } from "react-icons/io5";
import { RiNewspaperFill } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
const Services = () => {
  return (
    <section className="bg-buttonColor mt-10">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 py-20 my-20">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d9d9d9] flex justify-center items-center">
            <IoLogOut className="w-14 h-10" />
          </div>
          <div className="py-5 text-white">
            <h2 className="font-bold text-xl">
              Absence and Vacation Management
            </h2>
            <p className="pt-4 px-3">
              Effortless Absence and Vacation Management at Your Fingertips.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d9d9d9] flex justify-center items-center">
            <RiNewspaperFill className="w-14 h-10" />
          </div>
          <div className="py-5 text-white">
            <h2 className="font-bold text-xl">Track Payement Files</h2>
            <p className="pt-11 px-3">
              Track Payment Files Seamlessly, Anytime, Anywhere.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d9d9d9] flex justify-center items-center">
            <FaDollarSign className="w-14 h-10" />
          </div>
          <div className="py-5 text-white">
            <h2 className="font-bold text-xl">Accountant's Report</h2>
            <p className="pt-11 px-4">
              Generate Comprehensive Accountant Reports with Ease.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d9d9d9] flex justify-center items-center">
            <MdManageAccounts className="w-14 h-10" />
          </div>
          <div className="py-5 text-white">
            <h2 className="font-bold text-xl">
              HR Control and Document Management.
            </h2>
            <p className="pt-4 px-3">
              Streamline HR Control and Document Management for Maximum
              Efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
