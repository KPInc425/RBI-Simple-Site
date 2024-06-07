import LightDarkToggle from "../../shared/LightDarkToggle";
import ThemeController from "../../shared/ThemeController";
import RBIFullIcon from "../../shared/icons/RBIFullIcon";

const Header = ({theme, handleThemeChange}) => {
  return (
    <header className="py-4 flex justify-between xl:grid xl:grid-cols-3">
      {/* <div className="absolute top-36 right-0 xl:right-4 xl:top-5 h-full"> */}
      {/* </div> */}
      <div className="lg:h-16 lg:w-68 text-primary px-2 xl:col-start-2">
        <RBIFullIcon />
      </div>
      <div className="flex justify-self-end items-center xl:gap-4 pr-4">
        <ThemeController theme={theme} handleThemeChange={handleThemeChange} />
        <LightDarkToggle theme={theme} handleThemeChange={handleThemeChange} />
      </div>
    </header>
  );
};

export default Header;
