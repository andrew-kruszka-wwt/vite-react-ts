import './App.css';

import { useState } from 'react';

import { NavBar } from '@/components/NavBar';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRouter } from '@/hooks/useRouter';
import { HomePage } from '@/pages/HomePage';
import { MattPage } from '@/pages/MattPage';
import { WeatherPage } from '@/pages/WeatherPage';

function App() {
  const [count, setCount] = useState(0);
  const [isDark, toggleTheme] = useDarkMode();
  const [path, navigate] = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/weather':
        return <WeatherPage />;
      case '/matt':
        return <MattPage />;
      case '/':
      default:
        return <HomePage count={count} onIncrement={() => setCount((c) => c + 1)} />;
    }
  };

  // This will cause a TypeScript error - undefinedVariable is not defined
  console.log(undefinedVariable);

  return (
    <div className="App">
      <NavBar currentPath={path} onNavigate={navigate} isDark={isDark} onToggleTheme={toggleTheme} />
      {renderPage()}
    </div>
  );
}

export default App;
