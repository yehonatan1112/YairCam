import React, { useEffect, useState } from 'react';

const CoolestFuturisticComponent = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true);
    }, []);

    return (
        <div className={`futuristic-container ${showAnimation ? 'futuristic-transform' : ''}`}>
            <h1>Yair Cam</h1>
        </div>
    );
};

export default CoolestFuturisticComponent;