import React from 'react';
import styled from 'styled-components'
import Neon from '../components/Neon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

const Wrapper = styled.div`
    background: black;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NeonWrapper = styled.div`
    border: red 1px solid;
    height: 100vh;
    width: 90%;
    z-index: 0;
    position: relative;
    box-sizing: border-box;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/bg.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &::before {
        z-index: -1;
        position: absolute;
        content: '';
        background: radial-gradient(red, #000);
        opacity: .5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;
const NavWrapper = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
`;
const IconsNav = styled.nav`
    color: white;
    font-size: 1.5rem;
    border: red 1px solid;
`;

const Home: React.FC<Props> = () => (
    <Wrapper>
        <NeonWrapper>
            <Neon />
        </NeonWrapper>
        <NavWrapper>
            <IconsNav>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </IconsNav>
        </NavWrapper>
    </Wrapper>
);

export default Home;
