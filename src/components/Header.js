import React from 'react';
import styled from '@emotion/styled';

const Head = styled.header`
    background-color: green;
    padding: 20px;
    font-size: 50px;
    margin-bottom: 20px;
`;

const Header = () => {
    return ( 
        <Head className="row">
            <div className="col-12">
                <p>Header</p>
            </div>
        </Head>
     );
}
 
export default Header;
