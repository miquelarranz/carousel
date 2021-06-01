import * as React from 'react';
import { Carousel } from './Carousel';

export default {
    component: Carousel,
    title: 'Carousel',
    decorators: [
        (storyFn: () => React.ReactNode) => (
            <div
                style={{
                    backgroundColor: '#f7fafd',
                    border: '1px solid #d7dee9',
                    padding: '20px 20px 20px 20px',
                    height: 300,
                }}
            >
                {storyFn()}
            </div>
        ),
    ],
};

const slides: React.ReactNode[] = [
    <img src="https://i.picsum.photos/id/479/200/300.jpg?hmac=24Y_2mfqS4Jh4cf1gOlnYGYBszrnuy3ebrKkszU885k" />,
    <img src="https://i.picsum.photos/id/300/200/200.jpg?hmac=WLaMDs5x8JF59euEN0NiXqvM7t0IM6c5HgWhV2vvdkY" />,
    <img src="https://i.picsum.photos/id/184/200/300.jpg?hmac=dCgm4a8do6DWvjUWcFvft3Kd1srf1f_TyIZoWGrgu48" />,
    <img src="https://i.picsum.photos/id/168/200/200.jpg?hmac=VxnpUGg87Q47YRONmdsU2vNGSPjCs5vrwiAL-0hEIHM" />,
];

const bigSlides: React.ReactNode[] = [
    <img src="https://i.picsum.photos/id/485/700/100.jpg?hmac=cMHzEpRz8qODO22bG8lpcJqAdBs9mssD2p5pVizqKW8" />,
    <img src="https://i.picsum.photos/id/611/700/100.jpg?hmac=laAPLgGaVKfVFl_99S7t7waanJn4TF3_N3PaaIaMbyo" />,
    <img src="https://i.picsum.photos/id/985/700/100.jpg?hmac=sX2MnGOfDI-UGaXgxqIwHTRipwOBvkzv6EiKhVnwTPk" />,
];

export const Basic = () => <Carousel name="basic-carousel" slides={slides} />;

export const Small = () => (
    <div style={{ width: 300, height: 300 }}>
        <Carousel name="small-carousel" slides={slides} />
    </div>
);

export const WithBigSlides = () => (
    <div style={{ width: 300, height: 300 }}>
        <Carousel name="big-slides-carousel" slides={bigSlides} />
    </div>
);

export const WithManualPositioning = () => (
    <div style={{ width: 300, height: 300 }}>
        <Carousel name="big-slides-carousel" slides={bigSlides} currentPosition={2} />
    </div>
);
