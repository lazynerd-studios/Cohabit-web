"use client";
import { useRouter } from "next/navigation";
import HomeIcon from "@/assets/icons/HomeIcon";
import { AuthButton as Button } from "@/lib/AntDesignComponents";
const Step4 = () => {
  const { push } = useRouter();
  return (
    <div className="bg-[#E7F6FD] bg-opacity-[0.4] grid grid-cols-1 w-[100vw] gap-[1rem] py-[10%]">
      <div className="bg-[#FFF] w-full sm:w-[80%] md:w-[50%] m-auto rounded-[15px] py-[2rem]">
        <div className="grid grid-cols-1 md:gap-[1rem] items-center justify-center w-[60%] mx-auto">
          <HomeIcon className="block mx-auto" />
          <h3 className="text-[#1E5156] text-[15px] md:text-[32px] font-bold leading-[38.40px] text-center">
            Welcome on board !
          </h3>
          <span className="text-center text-[#7C8493] text-[12px] md:text-lg font-normal leading-[28.80px]">
            Awesome, your dashboard is ready .
          </span>
          <Button
            className="!bg-[#010886]"
            onClick={() => push("/dashboard")}
            type="primary"
          >
            Let’s go!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
