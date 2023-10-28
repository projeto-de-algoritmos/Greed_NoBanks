import { Button } from "reactstrap";
import "./Withdrawal.css"

const Withdrawal = () => {
  return (

    <div className="withdrawal">
      <div>
        <p>
          <input
            placeholder="Enter Deposit"
            min="3"
            max="100"
          />
          <Button className="deposit-button">Sacar</Button>
        </p>
      </div>
    </div>
  );
};

export default Withdrawal;