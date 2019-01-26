import header_styles from "../components/header/Header.module.css";


export function controllMenuBar(isInit = false){
  if(isInit){
    document.body.classList.remove(header_styles["panel-open"]);
    document
      .querySelector('[data-js="menu-toggle"]')
      .classList.remove(header_styles["open"]);
  } else{
    document.body.classList.toggle(header_styles["panel-open"]);
    document
      .querySelector('[data-js="menu-toggle"]')
      .classList.toggle(header_styles["open"]);
  }
}