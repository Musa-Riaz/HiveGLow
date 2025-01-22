import MainPage from "../pages/MainPage";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
