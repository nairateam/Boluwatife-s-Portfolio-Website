const TransBtn = (props) => {
    return ( 
        <a href={`${props.link}`}>
        <button className="btn">
            {props.tag}
        </button>
        </a>
     );
}
 
export default TransBtn;