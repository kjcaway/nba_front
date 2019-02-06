import header_styles from "../components/header/Header.module.css";
import moment from 'moment';

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

/**
 * 오늘 날짜를 특정 타임존에서 계산하여 반환, 미국시간(utc -5hour) default
 * @param {string} timezone 
 */
export function getTodayDate(timezone = 'us') {
  console.log('us date === ' + moment().utc().add(-5, 'h').format('YYYY-MM-DD'))
  return moment().utc().add(-5, 'h').format('YYYY-MM-DD')
}