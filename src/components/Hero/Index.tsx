import React, { HTMLAttributes } from "react";
import logo from "../../logo.svg";
import pokerImg from "./cardGameImg.jpeg";
import { Carousel, Container, Image } from "react-bootstrap";
import "./index.css";
import { url } from "inspector";

type HeroCarouselItem = {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  color?: string;
  description?: string;
};

type Props = {};

const heroes: HeroCarouselItem[] = [
  { title: "one", imgSrc: logo },
  {
    title: "Poker",
    imgSrc: pokerImg,
    color: "blue",
    description: "This is a lengthy description",
  },
];
const Hero = ({}: Props) => {
  return (
    <Container className="hero px-0" fluid>
      <Carousel variant="light my-auto">
        {heroes.map((hero, i) => {
          const { title, imgSrc, description, imgAlt, color } = hero;

          return (
            <Carousel.Item key={i}>
              <Image
                src={imgSrc}
                className="hero-image w-100 d-block"
                alt={imgAlt ?? title}
              ></Image>
              <Carousel.Caption>
                <h3 color={color}>{title}</h3>
                {description && <p>{description}</p>}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Hero;
