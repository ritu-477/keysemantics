
import React, { useState } from "react";
import Icon from '../utils/icons';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-soft-indigo p-2 w-12 border-white border rounded-lg flex justify-center">
                    <Icon iconName="doubleArrow" />
                </button>
            )}
        </div>
    );
};

export default BackToTop;

