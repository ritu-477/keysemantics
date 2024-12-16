const Heading = ({ classStyle, text,}) => {
    return (
        <h2 className={`${classStyle} sm:text-custom-xl font-bold sm:leading-custom-4xl text-3xl leading-10 text-navy-blue`}>{text}</h2>
    )
}

export default Heading