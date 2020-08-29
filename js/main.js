'use strict';

const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const element = entry.target;
    const width = element.clientWidth;

    element.classList.remove(
      'mobile',
      'tablet',
      'small-pc',
    );
    
    if (width > 768) {
      element.classList.add('mobile');
    }
    if (width > 992) {
      // element.classList.remove('mobile');
      element.classList.add('tablet');
    }
    if (width > 1100) {
    //   element.classList.remove('tablet');
      element.classList.add('small-pc');
    }
  })
});

const container = document.querySelector('.root');
resizeObserver.observe(container);
