import { changeStatus, checkStatus} from "./modules/header";

if (localStorage.getItem('darkmode') === null) {
  localStorage.setItem('darkmode', 'false');
}

const headerIcon = document.getElementById('header-icon') as HTMLElement;
checkStatus(headerIcon);

headerIcon.addEventListener('click', () => changeStatus(headerIcon));
