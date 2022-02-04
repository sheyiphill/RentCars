/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const Footer = () => {
  return (
    <FooterContainer>
        <InnerContainer>
            <AboutContainer>
             <Logo color="white" bgColor="dark" />
                <AboutText>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim at
                    eius magnam placeat qui ad, reprehenderit dolorum quidem corporis
                    quae.
                </AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                    <ListItem>
                        <a href="#">Home</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">About Us</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Services</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Models</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Blog</a>
                    </ListItem>
                </LinksList>
            </SectionContainer>

            <SectionContainer>
                <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                        <a href="#">FAQ</a>
                        </ListItem>
                        <ListItem>
                        <a href="#">Contact Us</a>
                        </ListItem>
                        <ListItem>
                        <a href="#">Support</a>
                        </ListItem>
                        <ListItem>
                        <a href="#">Privacy Policy</a>
                        </ListItem>
                        <ListItem>
                        <a href="#">Terms &amp; Condition</a>
                        </ListItem>
                    </LinksList>
            </SectionContainer>

            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </RedIcon>
                    <SmallText>+234 803-777-2177</SmallText>
                </HorizontalContainer>
            </SectionContainer>

            <SectionContainer>
                <HeaderTitle>Mail</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </RedIcon>
                    <SmallText>sheyiphill@gmail.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>

        <BottomContainer>
            <CopyrightText>
                &copy; {new Date().getFullYear()} RentCar.  All rights reserved.
            </CopyrightText>
        </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  min-height: 24em; 
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pl-12
        pr-12
        pt-10
        md:pt-16
        pb-1
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        w-full
        h-full
        max-w-screen-2xl
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;
const ListItem = styled.li`
  ${tw`
       mb-3
    `}
  & > a {
    ${tw`
        text-xs 
        text-white
        transition-all
        hover:text-gray-200
        `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
      text-gray-300
  `}
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
    `}
`;


const RedIcon = styled.span`
  ${tw`
        w-9
        h-9
        bg-red-500
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;
const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;
const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;
