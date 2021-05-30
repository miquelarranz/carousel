import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Carousel } from '../Carousel';

describe('Carousel', () => {
    const slides = [<p>Slide 1</p>, <p>Slide 2</p>, <p>Slide 3</p>];
    const selectors = {
        carousel: 'test-carousel',
        leftArrow: 'left-arrow',
        rightArrow: 'right-arrow',
    };

    it('renders a Carousel component with the first slide selected', () => {
        render(<Carousel slides={slides} name={selectors.carousel} />);

        const carousel = screen.getByTestId(selectors.carousel);
        const slide = screen.getByText('Slide 1');

        expect(carousel).toBeInTheDocument();
        expect(slide).toBeInTheDocument();
    });

    it('should show the second slide after clicking on the right arrow', () => {
        render(<Carousel slides={slides} name={selectors.carousel} />);

        const slide = screen.getByText('Slide 1');
        const arrow = screen.getByTestId(selectors.rightArrow);

        expect(slide).toBeInTheDocument();

        fireEvent.click(arrow);

        const secondSlide = screen.getByText('Slide 2');

        expect(secondSlide).toBeInTheDocument();
    });

    it('should show the third slide after clicking on the left arrow', () => {
        render(<Carousel slides={slides} name={selectors.carousel} />);

        const slide = screen.getByText('Slide 1');
        const arrow = screen.getByTestId(selectors.leftArrow);

        expect(slide).toBeInTheDocument();

        fireEvent.click(arrow);

        const secondSlide = screen.getByText('Slide 3');

        expect(secondSlide).toBeInTheDocument();
    });
});
