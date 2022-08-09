import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 95vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Tst = styled.div`
    background-color: #808080;
    width: 100px;
    height: 100px;
    clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');  
`

const Form: React.FC = () => {

    return (
        <Wrapper>
            <Tst />
        </Wrapper>
    )
}

export default Form