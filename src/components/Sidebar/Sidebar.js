import React from 'react';


import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu, SidebarLinkC} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Recycling</SidebarLink>
                    <SidebarLinkC href="//github.com/gthalhamer" target="_blank" aria-label="Github">Contact</SidebarLinkC>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
