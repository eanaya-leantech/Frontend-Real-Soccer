import React from 'react';
import {Button} from "@material-ui/core";

export const CustomButton = ({children, ...props}) => (
    <Button {...props} style={{
        background: props.background || "#191e2b",
        color: props.color || "#fff"
    }}>
        {children}
    </Button>
);
