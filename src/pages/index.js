import Headers from "@/module/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {

  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    console.log("window.screen.width;", window.screen.width)
    
      setScreenWidth(window.screen.width);

 
  }, []);

  // console.log(screenWidth)

  return (
    <>
      <Headers />
      <main>
        {
          screenWidth > 992 && (

            <div className="parent-wrapper">
              <div className="w-[50%] flex flex-col items-center">
                <div className="capitalize"><h6 className="text-blue-500">L2 on demand roll up</h6>
                  <h1 className="text-[4vw] font-bold mt-2">Deploy your<br />on demand rollup</h1>
                  <p className="text-[#777] text-[14px] mt-4">Instantly create a fully customizable L2 rollup that is secure and fast.</p>
                  <div className="mt-2 w-[400px] flex">
                    <button className="flex items-center justify-center rounded-[24px] px-[30px] py-[8px] text-white bg-blue-500 text-sm mt-6 mr-2">Deploy Now <FaLongArrowAltRight className="ml-2" /></button>
                    <button className="rounded-[24px] px-[30px] py-[8px] text-white bg-none border text-sm mt-6">Documentation</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          screenWidth < 992 && screenWidth > 768 && (
            <div className="background h-screen w-full">
              <div className="parent-wrapper-tablet pt-16">
                <div className="flex flex-col items-start justify-center pl-[60px]">
                  <div className="capitalize">
                    <h6 className="text-blue-500 text-[12px]">L2 on demand roll up</h6>
                    <h1 className="text-[45px] font-bold mt-2">Deploy your<br />on demand<br />rollup</h1>
                    <p className="text-[#777] text-[14px] mt-2">Instantly create a fully customizable L2 rollup that is <br />secure and fast.</p>
                    <div className="mt-2 w-[400px] flex">
                      <button className="flex items-center justify-center rounded-[24px] px-[30px] py-[8px] text-white bg-blue-500 text-sm mt-6 mr-2">Deploy Now <FaLongArrowAltRight className="ml-2" /></button>
                      <button className="rounded-[24px] px-[30px] py-[8px] text-white bg-none border text-sm mt-6">Documentation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          screenWidth < 768 && (
            <div className="background h-screen w-full" >
              <div className="parent-wrapper-mobile pt-16">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="capitalize">
                    <h6 className="text-blue-500 text-[18px]">L2 on demand roll up</h6>
                    <h1 className="text-[42px] font-bold mt-4 text-white">Deploy your<br />on demand rollup</h1>
                    <p className="text-[#777] text-[18px] mt-4">Instantly create a fully customizable L2 rollup<br />that is secure and fast.</p>
                    <div className="mt-2 w-[400px] flex items-center justify-center">
                      <button className="flex items-center justify-center rounded-[24px] px-[30px] py-[12px] text-white bg-blue-500 text-sm mt-6 mr-2">Deploy Now <FaLongArrowAltRight className="ml-2" /></button>
                      <button className="rounded-[24px] px-[30px] py-[12px] text-white bg-none border text-sm mt-6">Documentation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </main>

    </>
  );
}
