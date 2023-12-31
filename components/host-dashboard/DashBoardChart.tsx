"use client"
import BarCharts from "./BarCharts";
import ViewIcon from "@/assets/icons/ViewIcon";
import CtaIcon from "@/assets/icons/CtaIcon";
import {
  RadioGroup,
  CustomProgress as Progress,
} from "@/lib/AntDesignComponents";
import { useEffect, useState } from "react";
import { useGetHostBarChartQuery, useGetHostStatisticsAnalyticsQuery } from "@/redux/api/hostApi";
import { Spinner } from "../spinner/Spinner";
const DashBoardChart = () => {
  const [timeFrame, setTimeFrame] = useState<string>("monthly")
  const [statsData, setStatsData] = useState<Record<string, any>>({})
  const [chartData, setChartData] = useState<Record<string, any>>({})
  const { data, isLoading, isSuccess } = useGetHostStatisticsAnalyticsQuery({})
  const { data: stats, isLoading: statsLoading, isSuccess: statsSuccess } = useGetHostBarChartQuery({
    timeframe: timeFrame
  })

  useEffect(() => {
    if (isSuccess) {
      setStatsData(data?.data);
    }
    if (statsSuccess) {
      setChartData(stats?.data);
    }
  }, [data, isSuccess, stats?.data, statsSuccess])
  return (
    <>
      {
        isLoading ? <Spinner /> : <div className="mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] justify-between items-stretch gap-[1rem]">
          <div className="w-full border border-[#D6DDEB] p-[0.5rem] flex flex-col gap-[0.5rem]">
            <div className="border-b border-[#D6DDEB] pb-[0.3rem] flex items-center justify-between w-full mx-auto">
              <span>
                <h4 className="text-[#25324B] text-[20px] font-[500]">
                  House statistics
                </h4>
                <p className="text-[#7C8493] text-[14px] font-[400]">
                  Showing house statistic Jul 19-25
                </p>
              </span>
              <div>
                <RadioGroup />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] items-stretch">
              <div className="w-full min-h-[200px]">
                <BarCharts isLoading={statsLoading} data={chartData} />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div className="p-[16px] flex flex-col border border-[#D6DDEB]">
                  <div className="flex justify-between">
                    <h4 className="text-[#25324B] text-[18px] font-[700]">
                      House review
                    </h4>
                    <ViewIcon />
                  </div>
                  <span className="text-[#25324B] text-[36px] font-[500]">
                    {chartData?.house_review}
                  </span>
                </div>
                <div className="p-[16px] flex flex-col border border-[#D6DDEB]">
                  <div className="flex justify-between">
                    <h4 className="text-[#25324B] text-[18px] font-[700]">
                      House rented
                    </h4>
                    <CtaIcon />
                  </div>
                  <span className="text-[#25324B] text-[36px] font-[500]"> {chartData?.house_rented}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col gap-[0.2rem] border border-[#D6DDEB] p-[6px]">
              <h4 className="text-[#25324B] text-[20px] font-[500]">House Open</h4>
              <div className="flex items-end gap-[0.2rem]">
                <h1 className="text-[#25324B] text-[50px] font-[700]">{statsData?.house_open}</h1>
                <p className="text-[#7C8493] text-[20px] font-[300] pb-[1rem]">
                  House Opened
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.2rem] border border-[#D6DDEB] p-[6px]">
              <h4 className="text-[#25324B] text-[20px] font-[500]">
                House-seekers Summary
              </h4>
              <div className="flex items-end gap-[0.2rem]">
                <h1 className="text-[#25324B] text-[50px] font-[700]">{statsData?.house_open}</h1>
                <p className="text-[#7C8493] text-[20px] font-[300] pb-[1rem]">
                  House Opened
                </p>
              </div>

              <div className="grid grid-cols-[40%_20%_20%_20%] w-full">
                <span className="bg-[#010886] h-[16px]"></span>
                <span className="bg-[#16DD97] h-[16px]"></span>
                <span className="bg-[#DF8026] h-[16px]"></span>
                <span className="bg-[#F6513B] h-[16px]"></span>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center gap-[0.2rem]">
                  <div className="w-[20px] h-[20px] bg-[#010886] rounded-[4px]"></div>
                  <span className="text-[16px] flex">
                    <h6 className="font-[400] text-[#7C8493]">Review: </h6>
                    <p className="font-[500] text-[#25324B]">
                      {statsData?.summary?.reviews}
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-[0.2rem]">
                  <div className="w-[20px] h-[20px] bg-[#DF8026] rounded-[4px]"></div>
                  <span className="text-[16px] flex">
                    <h6 className="font-[400] text-[#7C8493]">Rated: </h6>
                    <p className="font-[500] text-[#25324B]">
                      {statsData?.summary?.rated === null ? 0 : statsData?.summary?.rated}
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-[0.2rem]">
                  <div className="w-[20px] h-[20px] bg-[#16DD97] rounded-[4px]"></div>
                  <span className="text-[16px] flex">
                    <h6 className="font-[400] text-[#7C8493]">Paid: </h6>
                    <p className="font-[500] text-[#25324B]">
                      {statsData?.summary?.paid}
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-[0.2rem]">
                  <div className="w-[20px] h-[20px] bg-[#F6513B] rounded-[4px]"></div>
                  <span className="text-[16px] flex">
                    <h6 className="font-[400] text-[#7C8493]">Refund: </h6>
                    <p className="font-[500] text-[#25324B]">
                      {statsData?.summary?.refund}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default DashBoardChart;
