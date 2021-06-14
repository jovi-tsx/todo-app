const Grid = props => {
    function toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = 'col'

        if(cols[0]) classes = `col-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`
        if(cols[4]) classes += ` col-xl-${cols[4]}`
        if(cols[5]) classes += ` col-xxl-${cols[5]}`
    
        return classes
    }

    return (
        <div className={`${toCssClasses(props.cols)} ${props.styleClass || ''}`}>
            {props.children}
        </div>
    )
}

export default Grid