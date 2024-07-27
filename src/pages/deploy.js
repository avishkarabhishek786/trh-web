import React from "react";
import Headers from "@/module/Header";
import Link from "next/link";

export default function Index() {
    return (
        <React.Fragment>
            <Headers />
            <section>
                <div className="text-2xl text-center font-bold w-full mb-6"><h1>Deploy</h1></div>
                <div className="flex flex-wrap items-center justify-around">
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="">
                            <img src="" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak</h1>
                            <p className="text-[#535b64]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus perferendis tempore architecto illo facere maiores optio corrupti? Temporibus vero modi porro maiores veniam dolores unde quas labore rem quaerat?
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[30%] px-[45px] py-[8px] rounded-[24px] bg-blue-500 text-white">Choose</button>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="">
                            <img src="" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak</h1>
                            <p className="text-[#535b64]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus perferendis tempore architecto illo facere maiores optio corrupti? Temporibus vero modi porro maiores veniam dolores unde quas labore rem quaerat?
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[40%] px-[45px] py-[8px] rounded-[24px] bg-[#0d1a31] text-[#535b64]">Coming soon</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="text-2xl text-center font-bold w-[50%] mb-6">
                    <h1>Enviroment</h1>
                    <p className="text-[12px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                        In repudiandae obcaecati, nostrum dolore sit totam magni suscipit
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-around">
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="">
                            <img src="" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak</h1>
                            <p className="text-[#535b64]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus perferendis tempore architecto illo facere maiores optio corrupti? Temporibus vero modi porro maiores veniam dolores unde quas labore rem quaerat?
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[30%] px-[45px] py-[8px] rounded-[24px] bg-blue-500 text-white">Choose</button>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="">
                            <img src="" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak</h1>
                            <p className="text-[#535b64]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus perferendis tempore architecto illo facere maiores optio corrupti? Temporibus vero modi porro maiores veniam dolores unde quas labore rem quaerat?
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[40%] px-[45px] py-[8px] rounded-[24px] bg-[#0d1a31] text-[#535b64]">Coming soon</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}