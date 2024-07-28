import React from "react";
import Headers from "@/module/Header";
import Link from "next/link";

export default function Index() {
    return (
        <React.Fragment>
            <Headers />
            <section>
                <div className="text-2xl text-center font-bold w-full mb-6 mt-8"><h1>Deploy</h1></div>
                <div className="flex flex-wrap items-center justify-around">
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="grid place-items-center">
                            <img src="/right.jpg" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak<sup className="text-red-500"> OP</sup></h1>
                            <p className="text-[#535b64]">
                                Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism's capabilities, this stack also includes a flexible transaction fee to enhance the user experience.
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[30%] px-[45px] py-[8px] rounded-[24px] bg-blue-500 text-white">Choose</button>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[40%] h-[500px] bg-[#000] text-center">
                        <div className="grid place-items-center">
                            <img src="/left.jpg" alt="image" />
                        </div>
                        <div className="absolute bottom-0 mt-6 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">Tokamak <sup className="text-green-500"> ZK+</sup></h1>
                            <p className="text-[#535b64]">
                                Cutting-edge virtual machine for L2. designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.
                            </p>
                            <Link href="#" className="text-blue-500">For additional information, check out documentation</Link>
                            <button className="mb-12 mt-12 w-[40%] px-[45px] py-[8px] rounded-[24px] bg-[#0d1a31] text-[#535b64]">Coming soon</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <center>
                    <div className="text-2xl text-center font-bold w-[50%] mb-6 flex flex-col">
                        <h1 className="text-[3rem] font-thin">Enviroment</h1>
                        <span className="text-[14px] text-[#535b64]">Choose an enviroment to create your own rollups.</span>
                        <span className="text-[14px] text-[#535b64]">Thanos Sepolia testnet and mainnet are supported.</span>
                    </div>
                </center>
                <div className="flex flex-wrap items-center justify-around mb-6">
                    <div className="w-[300px] h-[400px] bg-[#0f1620] text-center rounded-[14px] outline outline-blue-500 mb-8">
                        <div className="mt-6 flex flex-col items-center justify-center px-6">
                            <h1 className="text-2xl font-bold mb-4">Devnet</h1>
                            <p className="text-[#535b64]">
                                Deploy on devnet where you can run it in your local enviroment. It can be used during development and allows you to experiment before deploying to testnet or mainnet.
                            </p>
                        </div>
                    </div>
                    <div className="w-[300px] h-[400px] bg-[#0f1620] text-center rounded-[14px] outline outline-blue-500 mb-8">
                        <div className="mt-6 flex flex-col items-center justify-center px-6">
                            <h1 className="text-2xl font-bold mb-4">Testnet</h1>
                            <p className="text-[#535b64]">
                                The Thanos testnet is a test-only network build with the same enviroment as the mainnet so that you can rist-free test your applications and smart contracts before deploying them to the mainnet enviroment.
                            </p>
                        </div>
                    </div>
                    <div className="w-[300px] h-[400px] bg-[#0f1620] text-center rounded-[14px] outline outline-blue-500 mb-8">
                        <div className="mt-6 flex flex-col items-center justify-center px-6">
                            <h1 className="text-2xl font-bold mb-4">Mainnet</h1>
                            <p className="text-[#535b64]">
                                Thanos mainnet is an innovative L2 solution that inherits the security of Enthereum while enabling fast and secure blockchain services. <br /> Coming soon
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <center>
                    <div className="mt-[100px] mb-8">
                        <h1 className="capitalize text-[3rem] mb-2">Your rollup details</h1>
                        <p className="text-[#535b64]">Enter the information required for your own rollup.</p>
                        <p className="text-[#535b64]">If you're looking for more information on each of each item, checkout these
                            <Link href="#" className="text-blue-500"> documents</Link>
                        </p>
                    </div>
                    <div className="">
                        <form>
                            <div className="px-[50px] mb-8">

                                <div className="w-full">
                                    <div className="w-full flex items-center justify-around flex-wrap bg-[#0b1016] min-h-[200px] rounded-[16px]">
                                        <div className="flex flex-col items-start justify-center h-full">
                                            <p className="text-[#535b64] mb-2">Rollup Name</p>
                                            <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="Sample Name" required />
                                        </div>
                                        <div className="relative flex flex-col items-start justify-center h-[200px]">
                                            <p className="text-[#535b64] mb-2">Chain ID</p>
                                            <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="Chain ID" required />
                                            <p className="absolute bottom-[20px] text-[#535b64] text-start text-[13px]">Please enter the value you registered in
                                                <Link href="#" className="text-blue-500"> Chairlist</Link> <br /> beforehand
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full flex justify-around flex-wrap bg-[#0b1016] min-h-[400px] mt-[50px] rounded-[16px]">
                                    <div className="w-full mb-8">
                                        <h1 className="mt-12 text-2xl">Address Set-up</h1>
                                        <p className="text-[#535b64] mt-4">
                                            Please list the main addresses that will be used in your rollup. <br />
                                            The required ones automatically populated and can be edited.
                                        </p>

                                        <div className="flex items-center justify-around w-full flex-wrap mt-6">
                                            <div className="w-full flex items-center justify-center flex-wrap mb-4">
                                                <div className="flex flex-col items-start justify-center h-full lg:mr-8">
                                                    <p className="text-[#535b64] mb-2">Admin</p>
                                                    <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="0x111111111" required />
                                                </div>
                                                <div className="flex flex-col items-start justify-center h-full lg:ml-8">
                                                    <p className="text-[#535b64] mb-2">Sequencer</p>
                                                    <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="0x333333333" required />
                                                </div>
                                            </div>

                                            <div className="w-full flex items-center justify-center flex-wrap">
                                                <div className="flex flex-col items-start justify-center h-full lg:mr-8">
                                                    <p className="text-[#535b64] mb-2">Batcher</p>
                                                    <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="0x22222222" required />
                                                </div>
                                                <div className="flex flex-col items-start justify-center h-full lg:ml-8">
                                                    <p className="text-[#535b64] mb-2">Proposer</p>
                                                    <input type="text" className="text-[#535b64] h-[35px] w-[350px] bg-[#000] pl-4 text-[13px] rounded-lg border-1 border-[#777] outline-none" name="" placeholder="0x44444444" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="px-[80px] py-[10px] text-[#535b64] rounded-[24px] bg-[#0b1016] mt-12 mb-12">Deploy Rollup</button>
                            </div>
                        </form>
                    </div>
                </center>
            </section>
        </React.Fragment>
    )
}