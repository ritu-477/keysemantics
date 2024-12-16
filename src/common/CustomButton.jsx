import React from "react";

const CustomButton = ({ text, classStyle}) => {
    return (
        <button
            className={`font-normal text-sm leading-5 rounded-[48px] text-navy-blue border border-navy-blue sm:py-3 py-2 sm:px-4 px-3 transition-all duration-500 hover:text-white hover:bg-navy-blue ${classStyle}`}>
            {text}
        </button>
    );
};

export default CustomButton;