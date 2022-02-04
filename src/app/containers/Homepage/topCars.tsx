import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from '../../../typings/car';
import Car from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from '../../components/responsive';

export function TopCars() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar: ICar = {
    name: "Audi S3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA CITY",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };
  const testCar3: ICar = {
    name: "Audi S3 2019",
    mileage: "25k",
    thumbnailSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkDNkQe7MMrTA9RAvE4fArhzjacJIfw-Gb3mNW7aO_cZDXCk4",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Manual",
    gas: "Petrol",
  };

  const testCar4: ICar = {
    name: "Audi  RS3 2019",
    mileage: "25k",
    thumbnailSrc:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIxxI21vEikpDyIPcU0OZicIbw2ZnqjRNsLTZgym4E-MCa8pSa",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar5: ICar = {
    name: "Audi  S3 2017",
    mileage: "25k",
    thumbnailSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDCwS0-Dd6WA7ZCLkSqEAcCIelhk90FF1KkgZ4rSDFaO-G_WYa",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar6: ICar = {
    name: "Honda Accord 2019",
    mileage: "25k",
    thumbnailSrc:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/36f04758-5aab-42bc-912c-8e3420db060d/d5c9cc6a-43e6-4128-9154-17ff7f67955b.png",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar7: ICar = {
    name: "Carmy LE 2022",
    mileage: "25k",
    thumbnailSrc:
      "https://images.dealer.com/autodata/us/color/2022/USD20TOC022A0/040.jpg?impolicy=resize&w=240",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };


  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar3} />,
    <Car {...testCar4} />,
    <Car {...testCar5} />,
    <Car {...testCar6} />,
    <Car {...testCar7} />,
    <Car {...testCar3} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}

const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
       w-full
       flex 
       flex-wrap
       justify-center
       mt-7
       md:mt-10
    `}
`;