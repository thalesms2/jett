import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
`

const Wrapper = styled.div`

`

const Header = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
`

const Cell = styled.div`
    width: 150px;
    padding: 1em;
    text-decoration: none;
    color: black;
`

const Layout: React.FC = () => {

    return (
        <Wrapper>
            <GlobalStyle />
            <Header>
                <Link to='/'><Cell>Home</Cell></Link>
                <Link to='/tst'><Cell>Tst</Cell></Link>
                <Link to='/live/intro'><Cell>Intro</Cell></Link>
            </Header>
            <hr />
            <Outlet />
        </Wrapper>
    )
}

export default Layout