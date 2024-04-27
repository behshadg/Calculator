import React, { useState } from 'react';
import * as math from 'mathjs';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a202c;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  background-color: #333;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 600px;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const Display = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  background-color: #f3f4f6;
  color: #333;
  border: none;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  text-align: right;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex-grow: 1;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  flex-grow: 4;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? '#9ca3af' : '#4b5563')};
  color: #fff;
  padding: 1rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #6b7280;
  }
`;

const SpecialButton = styled(Button)`
  background-color: #6b7280;
  &:hover {
    background-color: #9ca3af;
  }
`;

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [activeOperator, setActiveOperator] = useState('');

  const handleInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    try {
      const result = math.evaluate(input);
      setInput(String(result));
      setActiveOperator('');
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setActiveOperator('');
  };

  const handleTrigonometricFunction = (func) => {
    setInput(input + func + '(');
  };

  const handleLogarithmicFunction = (func) => {
    setInput(input + func + '(');
  };

  const handleExponentialFunction = () => {
    setInput(input + 'e^(');
  };

  const handleSquareRoot = () => {
    setInput(input + 'sqrt(');
  };

  const handleFactorial = () => {
    setInput(input + '!');
  };

  const handlePercentage = () => {
    setInput(input + '/100');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
    setActiveOperator('');
  };

  const handleOperator = (operator) => {
    if (input && !isNaN(input.slice(-1))) {
      setInput(input + operator);
      setActiveOperator(operator);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Display>{input || '0'}</Display>
        <ButtonGrid>
          <SpecialButton onClick={clearInput}>AC</SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('sin')}>
            sin
          </SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('cos')}>
            cos
          </SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('tan')}>
            tan
          </SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('asin')}>
            asin
          </SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('acos')}>
            acos
          </SpecialButton>
          <SpecialButton onClick={() => handleTrigonometricFunction('atan')}>
            atan
          </SpecialButton>
          <SpecialButton onClick={() => handleLogarithmicFunction('log')}>
            log
          </SpecialButton>
          <SpecialButton onClick={() => handleLogarithmicFunction('ln')}>
            ln
          </SpecialButton>
          <SpecialButton onClick={handleExponentialFunction}>e^x</SpecialButton>
          <SpecialButton onClick={handleSquareRoot}>√</SpecialButton>
          <SpecialButton onClick={handleFactorial}>x!</SpecialButton>
          <SpecialButton onClick={handlePercentage}>%</SpecialButton>
          <Button onClick={() => handleInput('7')}>7</Button>
          <Button onClick={() => handleInput('8')}>8</Button>
          <Button onClick={() => handleInput('9')}>9</Button>
          <SpecialButton onClick={() => handleOperator('/')}>/</SpecialButton>
          <SpecialButton onClick={() => handleBackspace}>⌫</SpecialButton>
          <Button onClick={() => handleInput('4')}>4</Button>
          <Button onClick={() => handleInput('5')}>5</Button>
          <Button onClick={() => handleInput('6')}>6</Button>
          <SpecialButton onClick={() => handleOperator('*')}>
            <Button isActive={activeOperator === '*'}>*</Button>
          </SpecialButton>
          <Button onClick={() => handleInput('1')}>1</Button>
          <Button onClick={() => handleInput('2')}>2</Button>
          <Button onClick={() => handleInput('3')}>3</Button>
          <SpecialButton onClick={() => handleOperator('-')}>
            <Button isActive={activeOperator === '-'}>-</Button>
          </SpecialButton>
          <Button onClick={() => handleInput('0')}>0</Button>
          <Button onClick={calculateResult}>=</Button>
          <SpecialButton onClick={() => handleOperator('+')}>
            <Button isActive={activeOperator === '+'}>+</Button>
          </SpecialButton>
        </ButtonGrid>
      </Container>
    </>
  );
};

export default ScientificCalculator;
