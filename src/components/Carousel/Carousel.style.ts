import { createUseStyles } from 'react-jss';

export const useCarouselStyles = createUseStyles({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    arrow: {
        display: 'flex',
        margin: '0 8px',
        alignItems: 'center',
    },
    slides: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
});
