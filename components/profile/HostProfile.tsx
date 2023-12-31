"use client";
import gradient from "@/assets/gradient.jpg";
import Avatar from "@/assets/Avatar.jpg";
import EditIcon from "@/assets/icons/EditIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import UserCheckIcon from "@/assets/icons/UserCheckIcon";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import Image from "next/image";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import HostProfileSection from "./HostProfileSection";
import { useAppSelector } from "@/redux/hook";
import moment from "moment";

const HostProfile = () => {
  const user = useAppSelector((state) => state.userData?.user);

  return (
    <div className="w-[98%] mx-auto">
      <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
        <div className="w-full relative">
          <Image alt="background" className="w-full" src={gradient} />
          <EditIcon className="absolute right-[2%] top-[2%] fill-[#FFF] cursor-pointer" />
        </div>
        <div className="p-[1rem] grid grid-cols-[15%_70%_15%]">
          <Image alt="avatar" src={user?.data?.user?.image === null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : user?.data?.user?.image} width={80} height={80} className="rounded-[100%] w-[80px] h-[80px]" />
          <div className="flex flex-col items-start justify-between">
            <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] p-0">
              {user?.data?.user?.name}
            </h4>
            {user?.data?.user?.host_status === "NOT VERIFIED" ? <p className="text-[#56CDAD] text-[16px] uppercase font-[500]">
              Not Verified Host
            </p> : <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[24px] py-[12px] rounded-[8px]">
              <FlagIcon className="fill-[#56CDAD]" />
              <p className="text-[#56CDAD] text-[16px] uppercase font-[500]">
                Verified Host
              </p>
            </span>}

            <div className="flex items-start gap-[0.2rem]">
              {user?.data?.user?.status === "NOT VERIFIED" ? "NOT VERIFIED" : <span className="flex gap-[0.2rem]">
                <VerifiedIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  Verified
                </p>
              </span>}
              <span className="flex gap-[0.2rem]">
                <LocationIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  {user?.data?.user?.location}
                </p>
              </span>
              <span className="flex gap-[0.2rem]">
                <CalendarIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  {moment(user?.data?.user?.created_at).format("MMM D, YYYY")}

                </p>
              </span>
            </div>
          </div>
          <Button
            className="flex items-center self-end !bg-[#010886]"
            type="primary"
          >
            <div className="flex items-center justify-center gap-[0.2rem]">
              <UserCheckIcon />
              <p className="text-[14px] font-[600]">Edit Profile</p>
            </div>
          </Button>
        </div>
      </div>
      <HostProfileSection />
    </div>
  );
};

export default HostProfile;
