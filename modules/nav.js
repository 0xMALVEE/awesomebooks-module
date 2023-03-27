const NavFunction = (navs) => {
  navs.forEach((element) => {
    element.addEventListener('click', () => {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach((tab) => {
        tab.classList.add('hidden');
      });
      document.querySelector('.current').classList.remove('current');
      const tabId = element.getAttribute('class');
      document.querySelector(`#${tabId}`).classList.remove('hidden');
      element.classList.add('current');
    });
  });
};

export default NavFunction;