function CheerButton(props) { 
    //{letter: 'M', setShout: ƒ}
    //props.setShout()

    function handleClickCheerButton() { 
        props.setShout(props.letter)
    }

    console.log(props);
    return <button onClick={handleClickCheerButton}>{props.letter}</button>
}

export default CheerButton;