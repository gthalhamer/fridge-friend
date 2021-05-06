import React, { useState, useEffect } from 'react';

import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
    FooterLink, FooterLinkS, FooterLinkC, SocialIconLink, WebsiteRights, SocialLogo, SocialIcons, Copyright
} from './FooterElements';

const Footer = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer scrollNav={scrollNav}>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Fridge Friend
                            </SocialLogo>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navigate</FooterLinkTitle>
                            <FooterLink to="/" onClick={toggleHome}>Home</FooterLink>
                            <FooterLinkS to="about"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</FooterLinkS>
                            <FooterLinkS to="services"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} >Recycling</FooterLinkS>
                            <FooterLinkC href="//github.com/gthalhamer" target="_blank" aria-label="Github">Contact</FooterLinkC>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Account</FooterLinkTitle>
                            <FooterLink to="/signin">Sign In</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Stay Connected</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com/gabbi.thalhamer" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="//github.com/gthalhamer" target="_blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/in/gabrielle-thalhamer-36812a66/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Copyright>
                    <WebsiteRights>Fridge Friend © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                </Copyright>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
