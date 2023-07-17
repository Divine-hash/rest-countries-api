import { changeStatus, checkStatus } from "./modules/header";

const headerIcon = document.getElementById('header-icon') as HTMLElement;
checkStatus(headerIcon);

window.addEventListener('storage', () => checkStatus(headerIcon));
headerIcon.addEventListener('click', () => changeStatus(headerIcon));