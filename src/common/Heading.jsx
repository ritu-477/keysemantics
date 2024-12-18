const Heading = ({ classStyle, text,}) => {
    return (
        <h2 className={`${classStyle} sm:text-custom-xl font-bold sm:leading-custom-4xl text-2xl text-navy-blue`}>{text}</h2>
    )
}

export default Heading