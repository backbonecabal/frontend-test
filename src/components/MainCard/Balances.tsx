import React, { useState } from "react";

// hooks and services

// components, styles and UI
import { Radio } from "semantic-ui-react";
import L1balance from "./L1balance";
import L2balance from "./L2balance";

// interfaces
export interface BalancesProps {}

const Balances: React.FunctionComponent<BalancesProps> = () => {
  const [isL1, setisL1] = useState<boolean>(true);

  return (
    <div className="balance">
      <div className="balance-header">
        <span>Net Balances</span>
        <div className="balance-toggle">
          <span>Homestead</span>
          <Radio toggle onChange={() => setisL1(!isL1)} />
          <span>xDai</span>
        </div>
      </div>

      {isL1 ? <L1balance /> : <L2balance />}
    </div>
  );
};

export default Balances;
