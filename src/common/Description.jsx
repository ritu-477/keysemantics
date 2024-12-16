const Description = ({ text, classStyle }) => {
    return (
        <p className={`sm:text-base sm:leading-7 text-sm leading-6 font-normal text-navy-blue ${classStyle}`}>{text}</p>
    )
}

export default Description