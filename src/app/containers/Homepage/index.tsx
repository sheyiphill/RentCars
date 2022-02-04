import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Marginer } from "../../components/marginer";
import BookCard from '../../components/bookCard';
import Navbar  from '../../components/navbar';
import TopSection from './topSection';
import BookingSteps from './bookingSteps';
import AboutUs from './aboutUs';
import { TopCars } from './topCars';
import Footer from '../../components/footer';

const HomePage = () => {
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/> 
            <Marginer direction = "vertical" margin="3em"/>
            <BookCard/>
            <Marginer direction = "vertical" margin="3em"/>
            <BookingSteps/>
            <Marginer direction = "vertical" margin="3em"/>
            <AboutUs/>
            <Marginer direction = "vertical" margin="3em"/>
            <TopCars/> 
            <Footer/>
        </PageContainer>
    );
;}
export default HomePage;

const PageContainer = styled.div `
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `};
`;
