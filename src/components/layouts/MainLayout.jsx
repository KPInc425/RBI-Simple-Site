import { useEffect, useState } from "react";
import Footer from "./shared/Footer";
import Header from "./shared/Header"
import LightDarkToggle from "../shared/LightDarkToggle";

const MainLayout = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  const handleThemeChange = (e) => {
    console.log(e);
    if (e === "dark") {
      setTheme("dark");
    } else if (e === "light") {
      setTheme("light");
    } else {
      setTheme(e.target.value);
    }

  };

  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className='absolute right-4 top-28 z-[1]'>
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
      <Header theme={theme} handleThemeChange={handleThemeChange} />
      {children}
      <Footer />
    </>
  )
};

export default MainLayout;
