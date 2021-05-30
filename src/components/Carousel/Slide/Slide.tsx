import * as React from 'react';
import { useSlideStyles } from './Slide.style';

export interface ISlideProps {
    content: React.ReactNode;
}

export const Slide = ({ content }: ISlideProps) => {
    const classes = useSlideStyles();

    return <div className={classes.slide}>{content}</div>;
};
