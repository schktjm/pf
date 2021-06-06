import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Neon from '../components/Neon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLOR } from '../utils/';

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
    z-index: 0;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/bg.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    ${media.lessThan("medium")`
        width: 80%;
    `}

    ${media.greaterThan("medium")`
        width: 700px;
        height: 100vh;
    `}

    &::before {
        z-index: -1;
        position: absolute;
        content: '';
        opacity: .25;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle closest-side at center, transparent 40%, ${COLOR.pink.dark} 85%, transparent 120%);
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
