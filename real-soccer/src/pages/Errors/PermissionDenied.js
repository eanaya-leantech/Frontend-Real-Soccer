import React from 'react';
import ErrorComponent from "../../components/ErrorComponent";

export default () => (
    <ErrorComponent error={'403'} message={'Access to this resource on the server is denied!'}/>
);
