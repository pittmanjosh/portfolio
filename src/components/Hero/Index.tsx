import React, { ImgHTMLAttributes } from "react";
import logo from "../../logo.svg";
import pokerImg from "./pokerImg.jpg";
import { Carousel, Container } from "react-bootstrap";
import "./index.css";
import { url } from "inspector";

type HeroCarouselItem = {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  description?: string;
};

type Props = {};

const heroes: HeroCarouselItem[] = [
  { title: "one", imgSrc: logo },
  {
    title: "Poker",
    imgSrc: pokerImg,
    description: "This is a lengthy description",
  },
];
const Hero = ({}: Props) => {
  return (
    <Container className="hero px-0" fluid>
      <Carousel variant="light my-auto">
        {heroes.map((hero, i) => {
          const { title, imgSrc, description, imgAlt } = hero;

          return (
            <Carousel.Item key={i}>
              <div style={{}}>
                <img
                  src={imgSrc}
                  className="hero-image w-100"
                  alt={imgAlt ?? title}
                ></img>
                <Carousel.Caption>
                  <h3>{title}</h3>
                  {description && <p>{description}</p>}
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Hero;
