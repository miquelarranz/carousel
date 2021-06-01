import * as React from 'react';
import { ArrowDirection, Arrow } from './Arrow/Arrow';
import { useCarouselStyles } from './Carousel.style';
import { Slide } from './Slide/Slide';

export interface ICarouselProps {
    name: string;
    slides: React.ReactNode[];
    currentPosition?: number;
    onNextClick?: (position: number) => void;
    onPreviousClick?: (position: number) => void;
}

export const Carousel = ({ name, slides, currentPosition, onNextClick, onPreviousClick }: ICarouselProps) => {
    const classes = useCarouselStyles();
    const INITIAL_SLIDE_POSITION = 0;
    const SLIDE_OFFSET = 1;

    const LAST_SLIDE_POSITION = slides.length - 1;
    const hasAutomaticSliding = !currentPosition;

    const [currentSlide, setCurrentSlide] = React.useState<number>(currentPosition || INITIAL_SLIDE_POSITION);

    const generateSlides = () => {
        return (
            <div className={classes.slides}>
                {slides.map((slide: React.ReactNode, index: number) => {
                    const currentOne = hasAutomaticSliding ? currentSlide : currentPosition;

                    return currentOne === index && <Slide key={index} content={slide} />;
                })}
            </div>
        );
    };

    const onLeftClickHandler = () => {
        const previousPosition = hasAutomaticSliding ? currentSlide - SLIDE_OFFSET : currentPosition - SLIDE_OFFSET;

        if (hasAutomaticSliding) {
            const isFirstSlide = currentSlide === INITIAL_SLIDE_POSITION;
            setCurrentSlide(isFirstSlide ? LAST_SLIDE_POSITION : previousPosition);
        }

        if (onPreviousClick) {
            onPreviousClick(previousPosition);
        }
    };

    const onRightClickHandler = () => {
        const nextPosition = hasAutomaticSliding ? currentSlide + SLIDE_OFFSET : currentPosition + SLIDE_OFFSET;

        if (hasAutomaticSliding) {
            const isLastSlide = currentSlide === LAST_SLIDE_POSITION;

            setCurrentSlide(isLastSlide ? INITIAL_SLIDE_POSITION : nextPosition);
        }

        if (onNextClick) {
            onNextClick(nextPosition);
        }
    };

    return (
        <div data-testid={name} className={classes.container}>
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
