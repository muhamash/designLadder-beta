// import React from 'react'
import DesignLadderButton from "../components//common/DesignLadderButton";

export default function Header() {
    return (
        <div>
            <div className="flex justify-center items-center w-[80%] gap-5 md:gap-10 mx-auto">
                <div className="md:w-[50%]">
                    <h1 className="text-[#172739] font-bold md:text-[70px] text-[50px] leading-tight">
                        Order a custom <span className="underline text-[#F06E16]">Website</span> like you would a pizza
                    </h1>
                    <DesignLadderButton text={ "Get Instant Quote" } className={"" } />
              </div>
                <div className="md:w-[50%]">
                    no content
              </div>
            </div>
        </div>
    );
}
