const Icon = ({ iconName, className, color = "none" }) => {
    const IconList = {

    };

    return (
        <span className={`flex ${className}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;
