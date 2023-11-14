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
  const [count, setCount] = useState(0)

  function generateOperation ( text ) {
    console.log(text);
  }



  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleReset = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('La operacion no es Correcta.');
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item> { count } </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>CE</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>C</Item>
          </Grid>
          <Grid item xs={4} >
            <Item>
              <Button onClick={generateOperation(1)}>1</Button>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>5</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>6</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>7</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>9</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>0</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>=</Item>
          </Grid>
        </Grid>
      </Box>


      <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleReset}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
