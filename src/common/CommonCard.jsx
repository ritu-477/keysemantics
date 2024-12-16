import React from "react";
import Heading from "./Heading";
import CustomButton from "./CustomButton"; 
import Description from "./Description";

const CommonCard = ({ text, heading, list, classStyle }) => {
    return (
        <div className={`${classStyle}`}> 
            <Heading classStyle={'lg:text-start text-center'} text={heading} /> 
            <ul className="pb-4 max-w-[552px] max-lg:mx-auto lg:ml-2 list-disc pt-2  pl-5 flex flex-col">
                {list && list.map((item, index) => (
                    <li key={index} className="pb-2">
                        <Description classStyle={'max-w-[552px] w-full'} text={item} />
                    </li>
                ))}
            </ul>
            <div className="flex lg:justify-start justify-center">
                <CustomButton text={text} /> 
          </div>
        </div>
    );
};

export default CommonCard;