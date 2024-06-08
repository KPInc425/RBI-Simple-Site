import LightDarkToggle from "../../shared/LightDarkToggle";
import ThemeController from "../../shared/ThemeController";
import RBIFullIcon from "../../shared/icons/RBIFullIcon";

const Header = ({theme, handleThemeChange}) => {
  return (
    <header className="py-4">
      <div className="absolute top-1 right-16 xl:right-8 xl:top-5 h-full">
        <ThemeController theme={theme} handleThemeChange={handleThemeChange} />
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
      <div className="lg:h-16 lg:w-68 text-primary p-4 lg:p-0">
        <RBIFullIcon />
      </div>
    </header>
  );
};

export default Header;
