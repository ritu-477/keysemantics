
import React, { useEffect, useState } from 'react';
import Icon from '../utils/icons';

export const BackToTop = () => {
    const [visible, setValue] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const checkScroll = () => {
        setValue(window.scrollY >= 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
    },);

    return (
        <div className="relative">
            {visible && (
                <a className='bg-soft-indigo p-1 sm:p-2 rounded border-dark-blue border fixed right-3 bottom-3 cursor-pointer' href="">
                    <Icon
                        onClick={scrollToTop}
                        iconName="doubleArrow"
                    /></a>
            )}
        </div>
    );
};

export default BackToTop

