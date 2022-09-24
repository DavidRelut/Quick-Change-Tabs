(function() {
  const modifiers = {
    buttonActive: 'tabs__button--active',
    contentActive: 'tabs__content--active',
  };

  const attributes = {
    tabIndex: 'data-tab-index',
  };

  const elRoot = document.querySelector('.js-tabs');
  const elsButton = elRoot.querySelectorAll('.js-tabs__button');
  const elsContent = elRoot.querySelectorAll('.js-tabs__content');
  const elChangeForm = elRoot.querySelector('.js-tabs__change-form');
  const elChangeField = elRoot.querySelector('.js-tabs__change-field');

  const changeTab = index => {
    elsButton.forEach(el => {
      el.classList.remove(modifiers.buttonActive);
      // We confirm the index before applying the processing
      if (el.getAttribute(attributes.tabIndex) === index) {
        el.classList.add(modifiers.buttonActive);
      }
    });

    elsContent.forEach(el => {
      el.classList.remove(modifiers.contentActive);
      if (el.getAttribute(attributes.tabIndex) === index) {
        el.classList.add(modifiers.contentActive);
      }
    });
  };
  
  // On click, we assign the index to the corresponding element
  elsButton.forEach((el) => {
    el.addEventListener('click', e => {
      const tabIndex = el.getAttribute(attributes.tabIndex);
      
      e.preventDefault();
      changeTab(tabIndex);
    });
  });

  elChangeForm.addEventListener('submit', e => {
    const value = elChangeField.value;
    const contentArr = [].slice.call(elsContent);
    const hasIndex = !!contentArr.find(el => el.getAttribute(attributes.tabIndex) === value);

    e.preventDefault()
    elChangeField.value = '';

    if (!hasIndex) {
      alert('Index is invalid')
      return;
    }
    
    changeTab(value);
  });

})();