import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return {
        width: windowWidth,
        height: windowHeight
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    return windowDimensions;
}

export default useWindowDimensions;
