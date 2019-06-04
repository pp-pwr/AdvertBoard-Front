import React from 'react'
import styled from 'styled-components'

const Indicator = styled.div`
    text-align: center
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;

    & > .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default function LoadingIndicator(props) {
    return (
        <Indicator>
            <div className='loader'/>
        </Indicator>
    );
}