import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Neon from '../components/Neon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLOR } from '../utils/';

type Props = {};

const Wrapper = styled.div`
    box-sizing: border-box;
    background: black;
    min-height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NeonWrapper = styled.div`
    z-index: 0;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/bg.jpeg');
    background-size: auto 80%;
    background-repeat: no-repeat;
    background-position: center;

    ${media.lessThan("medium")`
        width: 100%;
        padding: 15vw;
    `}

    ${media.greaterThan("medium")`
        width: 90vh;
        height: 100vh;
        padding: 100px;
    `}

    &::before {
        z-index: -1;
        position: absolute;
        content: '';
        opacity: .29;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        ${media.lessThan("medium")`
            background: radial-gradient(circle closest-side at center, transparent 25%, ${COLOR.pink.dark} 65%, transparent 85%);
        `}

        ${media.greaterThan("medium")`
            background: radial-gradient(circle closest-side at center, transparent 25%, ${COLOR.pink.dark} 65%, transparent 95%);
        `}
    }
`;
const NavWrapper = styled.section`
    box-sizing: border-box;
    color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.lessThan("medium")`
        position: absolute; 
        bottom: 5vh;
        font-size: 1.5rem;
    `}

    ${media.greaterThan("medium")`
        font-size: 2rem;
        height: 40vh;
    `}
`;
const Text = styled.p`
    font-weight: normal;
    font-size: 0.75em;
`;
const IconLink = styled.a`
    margin-right: 30px;
    color: #F5F5F5;
    border: none;
    background: none;
    padding: 0;
    display: inline-block;
    font-size: inherit;
    transition: all 300ms ease-in-out;
    position: relative;

    &:last-child{
        margin-right: 0px;
    }

    &:visited {
        color: #F5F5F5;
    }

    &:hover {
        transform: translateY(-0.25em);
        cursor: pointer;
    }
`;
const IconBtn = IconLink.withComponent('button')
const IconButton = styled(IconBtn)`
    &:active {
        & > span {
            visibility: visible;
        }
    }
`
const Tooltip = styled.span`
    transition: visibility 1s ease-out;
    visibility: hidden;
    z-index: 1;
    background: #E0E0E0;
    color: black;
    position: absolute;
    top: -60%;
    left: -40%;
    border-radius: 4px;
    font-size: 0.4em;
    padding: 2px 4px;
    
    &::after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #E0E0E0 transparent transparent transparent;
        position: absolute;
        left: calc(50% - 5px);
        top: 100%;
    }

`

const Home: React.FC<Props> = () => {
    const copyMail = () => {
        const mail = 'schktjm@gmail.com';
        navigator.clipboard.writeText(mail)
            .catch(e => console.error(e))
    }
    return (
        <Wrapper>
            <NeonWrapper>
                <Neon />
            </NeonWrapper>
            <NavWrapper>
                <Text>Contact.</Text>
                <nav>
                    <IconLink href="https://twitter.com/schktjm" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </IconLink>
                    <IconLink href="https://tjmschk.hatenablog.com/" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={['fas', 'blog']} />
                    </IconLink>
                    <IconButton type="button" onClick={copyMail}>
                        <Tooltip>Copyed!</Tooltip>
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </IconButton>
                </nav>
            </NavWrapper>
        </Wrapper>
    )
};

export default Home;
