import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === "-" ? display.slice(1) : "-" + display);
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let result;

      switch (operator) {
        case "+":
          result = currentValue + inputValue;
          break;
        case "-":
          result = currentValue - inputValue;
          break;
        case "×":
          result = currentValue * inputValue;
          break;
        case "÷":
          result = inputValue !== 0 ? currentValue / inputValue : "Error";
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    if (!operator || previousValue === null) return;

    const inputValue = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = previousValue + inputValue;
        break;
      case "-":
        result = previousValue - inputValue;
        break;
      case "×":
        result = previousValue * inputValue;
        break;
      case "÷":
        result = inputValue !== 0 ? previousValue / inputValue : "Error";
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const Button = ({ onClick, children, className = "", wide = false }) => (
    <button
      onClick={onClick}
      className={`
        ${wide ? "col-span-2" : ""}
        ${className}
        h-16 rounded-2xl text-xl font-medium
        transition-all duration-150 ease-out
        active:scale-95 active:brightness-90
        hover:brightness-110
        shadow-lg hover:shadow-xl
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');
        
        .calc-container {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .display-area {
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .btn-number {
          background: linear-gradient(145deg, #334155 0%, #1e293b 100%);
          color: #f8fafc;
        }
        
        .btn-operator {
          background: linear-gradient(145deg, #f59e0b 0%, #d97706 100%);
          color: #1e293b;
        }
        
        .btn-function {
          background: linear-gradient(145deg, #475569 0%, #334155 100%);
          color: #f8fafc;
        }
        
        .display-text {
          font-family: 'Space Mono', monospace;
          background: linear-gradient(90deg, #f8fafc 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-amber {
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }
      `}</style>
      
      <div className="calc-container w-80 rounded-3xl p-6">
        {/* Display */}
        <div className="display-area rounded-2xl p-4 mb-4">
          <div className="text-right">
            <div className="text-slate-500 text-sm h-6 font-mono">
              {previousValue !== null && `${previousValue} ${operator || ""}`}
            </div>
            <div 
              className="display-text text-4xl font-bold tracking-tight overflow-hidden"
              style={{ 
                fontSize: display.length > 10 ? "1.5rem" : display.length > 7 ? "2rem" : "2.25rem" 
              }}
            >
              {display}
            </div>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <Button onClick={clear} className="btn-function">AC</Button>
          <Button onClick={toggleSign} className="btn-function">±</Button>
          <Button onClick={inputPercent} className="btn-function">%</Button>
          <Button onClick={() => performOperation("÷")} className="btn-operator glow-amber">÷</Button>
          
          {/* Row 2 */}
          <Button onClick={() => inputDigit("7")} className="btn-number">7</Button>
          <Button onClick={() => inputDigit("8")} className="btn-number">8</Button>
          <Button onClick={() => inputDigit("9")} className="btn-number">9</Button>
          <Button onClick={() => performOperation("×")} className="btn-operator glow-amber">×</Button>
          
          {/* Row 3 */}
          <Button onClick={() => inputDigit("4")} className="btn-number">4</Button>
          <Button onClick={() => inputDigit("5")} className="btn-number">5</Button>
          <Button onClick={() => inputDigit("6")} className="btn-number">6</Button>
          <Button onClick={() => performOperation("-")} className="btn-operator glow-amber">−</Button>
          
          {/* Row 4 */}
          <Button onClick={() => inputDigit("1")} className="btn-number">1</Button>
          <Button onClick={() => inputDigit("2")} className="btn-number">2</Button>
          <Button onClick={() => inputDigit("3")} className="btn-number">3</Button>
          <Button onClick={() => performOperation("+")} className="btn-operator glow-amber">+</Button>
          
          {/* Row 5 */}
          <Button onClick={() => inputDigit("0")} className="btn-number" wide>0</Button>
          <Button onClick={inputDecimal} className="btn-number">.</Button>
          <Button onClick={calculate} className="btn-operator glow-amber">=</Button>
        </div>
        
        {/* Brand */}
        <div className="text-center mt-4 text-slate-600 text-xs tracking-widest uppercase">
          Calculator
        </div>
      </div>
    </div>
  );
}
