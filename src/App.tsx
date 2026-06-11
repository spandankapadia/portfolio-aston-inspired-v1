import { useEffect } from 'react';
import { Theme } from './settings/types';
import { PortfolioAstonInspiredV1 } from './components/generated/PortfolioAstonInspiredV1';

const theme: Theme = 'light';

function App() {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <PortfolioAstonInspiredV1 />
    </>
  ); // %EXPORT_STATEMENT%
}

export default App;
