import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Main';
import Main from './components/Header';


const App = () => {
  const [email, setEmail] = React.useState('test1@example.com');
  return (
    <ThemeProvider>
      <Main email={email} setEmail={setEmail} />
      <Header email={email} />
    </ThemeProvider>
  );
};

export default App;