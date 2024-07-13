// import React from 'react'
import DesignLadderButton from "../components//common/DesignLadderButton";

export default function Header() {
    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse justify-center items-center w-[90%] gap-5 md:gap-10 mx-auto">
                <div className="md:w-[50%] container">
                    <h1 className="text-[#172739] w-fit font-bold md:text-[70px] text-[45px] leading-tight pb-5">
                        Order a custom <span className="underline text-[#F06E16]">Website</span> like you would a pizza
                    </h1>
                    <DesignLadderButton text={ "Get Instant Quote" } className={"" } />
              </div>
                <div className="md:w-[50%] container flex items-center justify-center">
                    no content
              </div>
            </div>
        </div>
    );
}
