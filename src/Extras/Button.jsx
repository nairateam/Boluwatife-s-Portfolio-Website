const PryBtn = (props) => {
    return ( 
        <a href={`${props.link}`}>
        <button className="btn pry_btn">
            {props.tag}
        </button>
        </a>
     );
}
 
export default PryBtn;