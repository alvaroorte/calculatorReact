import { useState } from 'react'
import './App.css'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {


  const [input, setInput] = useState('2^6');
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const resetOperation = () => {
    setInput('');
    setResult('0');
  };

  const operationCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('La operacion no es Correcta.');
    }
  };
  return (
    <>
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <div className="result">{result}</div>
                    <div className="input">{input}</div>
                </div>
                <div className="buttons">
                    <button variant="outlined" className='button' onClick={() => handleClick('7')}>7</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('8')}>8</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('9')}>9</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('/')}>/</button>

                    <button variant="outlined" className='button' onClick={() => handleClick('4')}>4</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('5')}>5</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('6')}>6</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('*')}>*</button>

                    <button variant="outlined" className='button' onClick={() => handleClick('1')}>1</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('2')}>2</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('3')}>3</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('-')}>-</button>

                    <button variant="outlined" className='button' onClick={() => handleClick('0')}>0</button>
                    <button variant="outlined" className='button' onClick={resetOperation}>C</button>
                    <button variant="outlined" className='button' onClick={operationCalculate}>=</button>
                    <button variant="outlined" className='button' onClick={() => handleClick('+')}>+</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default App
