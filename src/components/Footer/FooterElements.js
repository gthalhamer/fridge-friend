import styled from 'styled-components';
import { Link } from "react-router-dom";
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #92c14d;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 999px) {
        margin-top: 100px;

    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;

    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const FooterLinkS = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color:#567a22 ;
        transition: 0.3s ease-out ;
    }
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color:#567a22 ;
        transition: 0.3s ease-out ;
    }
`;

export const FooterLinkC = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color:#567a22 ;
        transition: 0.3s ease-out ;
    }
`;

export const Copyright = styled.section`
    max-width: 1000px;
    width: 100%;
`;


export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;


  @media screen and (max-width: 820px) {
      flex-direction: column;
  }  
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 32px;
`;