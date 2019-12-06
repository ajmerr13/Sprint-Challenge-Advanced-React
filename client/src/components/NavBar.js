import React from "react";
import { useDarkMode } from './hooks/useDarkMode';
import styled from "styled-components";

const Lbutton = styled.button `
box-sizing: border-box;
background-color: transparent;
border-radius: 0.6em;
display: flex;
margin: 20px;
padding: 1.2em 2.8em;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
font-weight: 700;
`;
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  return (
    <nav>
      <h1>Women's World Cup 2019 Player Rankings</h1>
      <div>
        <Lbutton
          onClick={
            e => {
                e.preventDefault();
                setDarkMode(!darkMode);
                if(!darkMode) {
                    e.target.textContent = "Light Mode"
                }
                else 
                    e.target.textContent = "Dark Mode"
            }
          }
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          Dark Mode
        </Lbutton>
      </div>
    </nav>
  );
};
export default Navbar; 