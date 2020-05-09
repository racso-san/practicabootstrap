import React from 'react';
import styled from '@emotion/styled';

const Pie = styled.footer`
    background-color: black;
    font-size: 5px;
    padding: 12px;
`;

const Footer = () => {
    return ( 
        <Pie className="row">
            <div className="col-12">
                <h3>Footer</h3>
            </div>
        </Pie>
     );
}
 
export default Footer;