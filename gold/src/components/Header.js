import React from "react";
import cover from "../images/Coverart.jpeg"

export default function Header() {
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 pb-12" style={{minHeight: 600}}>
                <div className="relative rounded-md shadow my-20 ">
                    <img src={cover} alt="gold eye" className="w-full h-96 rounded-md  object-center object-fill absolute sm:block hidden" />
                    <img src={cover} alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-black-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-20 flex flex-col justify-between rounded-md mt-20 ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Gold Eye</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
