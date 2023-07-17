const lightModeImgUrl = new URL('../img/dark-mode.svg', import.meta.url);
const darkModeImgUrl = new URL('../img/light-mode.svg', import.meta.url);

const root = document.documentElement;
// const darkmodeBg = getComputedStyle(root).getPropertyValue('--lm-very-dark-blue');

// console.log(darkmodeBg);

enum Colors {
  darkmodeBg = '#202c37',
  lightmodeBg = '#fafafa',
  darkmodeElem = '#2b3945',
  lightmodeElem = '#ffffff',
  darkmodeText = '#ffffff',
  lightmodeText = '#111517'
}

function changeIcon(elem: HTMLElement, value: string): void {
  if (value === 'true') {
    elem.innerHTML = "";
    elem.insertAdjacentHTML(
      'afterbegin',
      `<img src=${darkModeImgUrl}/><p>Light Mode</p>`
      );
  } else {
    elem.innerHTML = "";
    elem.insertAdjacentHTML(
      'afterbegin',
      `<img src=${lightModeImgUrl}/><p>Dark Mode</p>`
      );
  }
}

function setLightMode(): void {
  root.style.setProperty('--lm-very-light-gray', Colors.lightmodeBg);
  root.style.setProperty('--lm-very-dark-blue', Colors.lightmodeText);
  root.style.setProperty('--lmdm-white', Colors.lightmodeElem);
}

function setDarkMode(): void {
  root.style.setProperty('--lm-very-light-gray', Colors.darkmodeBg);
  root.style.setProperty('--lm-very-dark-blue', Colors.darkmodeText);
  root.style.setProperty('--lmdm-white', Colors.darkmodeElem);
}

export function checkStatus(elem: HTMLElement): void {
  if (localStorage.getItem('darkmode') === 'false') {
    setLightMode();
    changeIcon(elem, 'false');
  } else {
    setDarkMode();
    changeIcon(elem, 'true');
  }
}

export function changeStatus(elem: HTMLElement): void {
  if (localStorage.getItem('darkmode') === 'false') {
    localStorage.setItem('darkmode', 'true');
    setDarkMode();
    changeIcon(elem, 'true');
  } else {
    localStorage.setItem('darkmode', 'false');
    setLightMode();
    changeIcon(elem, 'false');
  }
}
