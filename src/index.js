import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import App from './App';
import './index.css';

const theme = extendTheme({
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);