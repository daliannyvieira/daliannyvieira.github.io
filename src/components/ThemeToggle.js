import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
`

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100%;
  background: ${props => props.colorMode === 'dark' ? '#292a35' : '#8fdbff'};
  transition: transform linear .2s;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
  }

  &:before {
    position: absolute;
    top: ${props => props.colorMode === 'dark' ? '8px' : '5px'};
    left: 8px;
    width: 10px;
    height: 10px;
    content: '';
    background: ${props => props.colorMode === 'dark' ? '#ddd' : '#ffe24d'};
    overflow: hidden;
    transition: all linear 0.2s;
    border-radius: 100%;

    @media (min-width: 992px) {
      top: ${props => props.colorMode === 'dark' ? '10px' : '5px'};
      left: 10px;
      width: 20px;
      height: 20px;
    }
  }

  &:after {
    position: absolute;
    top: ${props => props.colorMode === 'dark' ? '8px' : '5%'};
    left: ${props => props.colorMode === 'dark' ? '12px' : '20px'};
    width: 10px;
    height: 10px;
    content: '';
    background: #292a35;
    border-radius: 100%;
    overflow: hidden;
    opacity: ${props => props.colorMode === 'dark' ? 1 : 0};

    @media (min-width: 992px) {
      top: ${props => props.colorMode === 'dark' ? '5px' : '5%'};
      left: ${props => props.colorMode === 'dark' ? '15px' : '25px'};
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <Wrap>
      <Button
        colorMode={colorMode}
        onClick={() => 
          setColorMode(colorMode === 'dark' ? 'light' : 'dark')
        }
      >
      </Button>
    </Wrap>
  );
};

export default DarkToggle;