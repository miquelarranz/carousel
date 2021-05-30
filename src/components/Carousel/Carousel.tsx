import * as React from 'react';
import { ArrowDirection, Arrow } from './Arrow/Arrow';
import { useCarouselStyles } from './Carousel.style';
import { Slide } from './Slide/Slide';

export interface ICarouselProps {
    name: string;
    slides: React.ReactNode[];
}

export const Carousel = ({ name, slides }: ICarouselProps) => {
    const classes = useCarouselStyles();
    const INITIAL_SLIDE_POSITION = 0;
    const SLIDE_OFFSET = 1;

    const LAST_SLIDE_POSITION = slides.length - 1;

    const [currentSlide, setCurrentSlide] = React.useState<number>(INITIAL_SLIDE_POSITION);

    const generateSlides = () => {
        return (
            <div className={classes.slides}>
                {slides.map((slide: React.ReactNode, index: number) => {
                    return currentSlide === index && <Slide content={slides[currentSlide]} />;
                })}
            </div>
        );
    };

    const onLeftClickHandler = () => {
        const isFirstSlide = currentSlide === INITIAL_SLIDE_POSITION;
        setCurrentSlide(isFirstSlide ? LAST_SLIDE_POSITION : currentSlide - SLIDE_OFFSET);
    };

    const onRightClickHandler = () => {
        const isLastSlide = currentSlide === LAST_SLIDE_POSITION;
        setCurrentSlide(isLastSlide ? INITIAL_SLIDE_POSITION : currentSlide + SLIDE_OFFSET);
    };

    return (
        <div id={name} className={classes.container}>
            <div className={classes.arrow}>
                <Arrow direction={ArrowDirection.Left} onClick={onLeftClickHandler} />
            </div>
            {generateSlides()}
            <div className={classes.arrow}>
                <Arrow direction={ArrowDirection.Right} onClick={onRightClickHandler} />
            </div>
        </div>
    );
};
