import * as React from "react";
import { Redirect   } from "react-router-dom";

const Redirector: React.FunctionComponent = () => {
    return <Redirect to='/'/>;
};

export default Redirector