import React from "react";
import { Loader } from "semantic-ui-react";

const Initializing: React.FunctionComponent = () => {
  return (
    <div className="initializing">
      <Loader inline active size="massive" />
      <span>Loading DApp...</span>
    </div>
  );
};

export default Initializing;
