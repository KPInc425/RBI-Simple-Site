import LightDarkToggle from "../../shared/LightDarkToggle";
import ThemeController from "../../shared/ThemeController";
import RBIFullIcon from "../../shared/icons/RBIFullIcon";

const Header = ({theme, handleThemeChange}) => {
  return (
    <header className="py-4 flex justify-between w-full">
      <div className="lg:h-16 lg:w-68 text-primary p-4 lg:p-0">
        <RBIFullIcon />
      </div>
      <div className="flex items-center">
        <ThemeController theme={theme} handleThemeChange={handleThemeChange} />
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
    </header>
  );
};

export default Header;
