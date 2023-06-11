import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '800px' }}>  {/* return an object within style that holds .css styles */}
            {props.children}
        </div> 
    );
}
export default Scroll;