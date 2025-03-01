import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { myTheme } from './styles/animations/Theme.styled.tsx'
import { GlobalStyles } from './styles/animations/GlobalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
    
  
)
