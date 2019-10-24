import React from 'react';

export const Icon = ({icon, size, color, ...props}) => (
    <span {...props}>
        <i className={`fas ${icon}`}
           style={{
               fontSize: `${size}px`,
               color: `${color || '#fff'}`
           }}/>
   </span>
);
