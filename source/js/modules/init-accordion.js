import {Accordions} from './accordions';
let accordions;


const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

const changeActive = () => {
  let activeControl = document.querySelectorAll('.FAQ__control');
  let activeTab = document.querySelectorAll('.FAQ__content .tabs__element');

  const breakpointDesktop = window.matchMedia('(min-width:1366px)');
  const breakpointTablet = window.matchMedia('(min-width:768px) and (max-width:1365px)');
  const breakpointChecker = () => {
    for (let i = 0; i < activeControl.length; i++) {
      activeControl[i].classList.remove('is-active');
    }
    for (let i = 0; i < activeTab.length; i++) {
      activeTab[i].classList.remove('is-active');
    }
    if (breakpointDesktop.matches) {
      activeControl[1].classList.add('is-active');
      activeTab[1].classList.add('is-active');
    } else
    if (breakpointTablet.matches) {
      activeControl[0].classList.add('is-active');
      activeTab[0].classList.add('is-active');
    } else {
      activeControl[2].classList.add('is-active');
      activeTab[2].classList.add('is-active');
    }
  };

  if (activeControl.length && activeTab.length) {
    breakpointDesktop.addListener(breakpointChecker);
    breakpointTablet.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {initAccordions, accordions, changeActive};
