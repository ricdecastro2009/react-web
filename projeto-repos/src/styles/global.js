import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background-color: #0d2636 ;
    font-size:14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, buttons{
    color:#222;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  }

  button{
    cursor: pointer;
  }
`