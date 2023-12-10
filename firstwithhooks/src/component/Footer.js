import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>Developer Funnel &copy; {props.month} - {props.year}</h3>
            </center>
        </React.Fragment>
    )
}

export default Footer;