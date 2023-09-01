"use client";
import ShortArrow from "@/assets/icons/shortArrow";
import HomeCard from "../cards/HomeCard";
import DashBoardChart from "./DashBoardChart";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";

const HostDashboard = () => {
  const { push } = useRouter();
  const arr = [1, 1, 1];
  return (
    <div className="w-full mx-auto">
      <div className="w-[98%] mx-auto grid grid-cols-1 py-[0.5rem] gap-[0.5rem]">
        <h5 className="text-[#25324B] mb-[0.5rem] text-[14px] md:text-[18px] font-bold leading-[28.80px]">
          Here is your apartment list statistics report
        </h5>
        <div className="w[98%]  py-[0.5rem] md:py-[1rem] px[2rem] gap-[0.5rem] grid grid-cols-1 md:grid-cols-3 items-center justify-between">
          <div className="bg-[#010886] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] text-[#FFF] p-[15px]">
            <span>76</span>
            <span className="text-[12px] md:text-[18px] font-[400]">
              View your apartment
            </span>
            <ShortArrow className="stroke-[#FFF]" />
          </div>
          <div className="bg-[#16DD97] flex items-center justify-between gap-[0.3rem] text-[48px] font-[700] text-[#000] p-[15px]">
            <span className="text-[20px] md:text-[48px]">3</span>
            <span className="text-[12px] md:text-[18px] font-[400]">
              Schedule for visiting
            </span>
            <ShortArrow className="stroke-[#000]" />
          </div>
          <div className="bg-[#9CA9F9] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] text-[#000] p-[15px]">
            <span>24</span>
            <span className="text-[12px] md:text-[18px] font-[400]">
              Messages received
            </span>
            <ShortArrow className="stroke-[#000]" />
          </div>
        </div>
        <div className="w-full max-w-[98%]">
          <DashBoardChart />
        </div>
        <div className="w-[98%] mx-auto flex md:grid md:grid-cols-[60%_10%] items-center justify-between">
          <h4>Recently Uploaded</h4>
          <Button onClick={() => push("/dashboard/find-property")}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] w-[98%] mx-auto">
          {arr.map((e, i) => (
            <HomeCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
