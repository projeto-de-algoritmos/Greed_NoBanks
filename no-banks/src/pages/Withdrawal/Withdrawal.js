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
        <button>Sacar</button>
      </p>
      </div>
      </div>
    );
  };
  
  export default Withdrawal;