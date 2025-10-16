import React from 'react';

const SubClip = () => {
    return (
        <svg className="block" width={0} height={0}>
            <clipPath id="subCard" clipPathUnits="objectBoundingBox">
                <path d="
                    M 0.20 0.04
                    Q 0.20 0 0.24 0
                    L 0.96 0
                    Q 1 0 1 0.04
                    L 1 0.96
                    Q 1 1 0.96 1
                    L 0.04 1
                    Q 0 1 0 0.96
                    L 0 0.24
                    Q 0 0.20 0.04 0.20
                    L 0.16 0.20
                    Q 0.20 0.20 0.20 0.16
                    Z
                " />
            </clipPath>
        </svg>
    );
};

export default SubClip;