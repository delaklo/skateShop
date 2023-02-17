

const Characteristics = (props)=>{


    return(
        <div style={{padding: "40px"}}>
        <h2>Characteristics of <span className='char__title'>{props.title}</span></h2>
            <ul className='allAbout__list'>
                <li>Weiht Limit: <span className='dots'>.............................</span> {props.limit} kg</li>
                <li>Deck's size: <span className='dots'>.............................</span> {props.size}</li>
                <li>Meterial: <span className='dots'>.............................</span> {props.material}</li>
                <li>Wheel Diameter: <span className='dots'>.............................</span> {props.wheel}mm</li>
            </ul>
            <span>Detailed about item...</span>
        </div>
    )
}

export default Characteristics;