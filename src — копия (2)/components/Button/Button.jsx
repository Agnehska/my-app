import { useContext } from "react";
import { ThemeContext } from "../Context";

function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
        {theme}
      </button>
    );
  }
export default Button;