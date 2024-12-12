  let jsBox = document.querySelectorAll('.js-education-box');
  let jsBoxHeading = document.querySelectorAll('.js-box-heading');
  let jsBoxSign = document.querySelectorAll('.js-box-sign');
  let jsBoxpara = document.querySelectorAll('.education-content');

  jsBox.forEach((box, index) => {
    box.addEventListener('click', () => {
      if (box.classList.contains('box-active')) {
        // If the box is already active, remove active classes
        box.classList.remove('box-active');
        jsBoxHeading[index].classList.remove('color-active');
        jsBoxSign[index].innerHTML = '+';
        jsBoxSign[index].classList.remove('minus');
        jsBoxpara.classList.remove('shown'); // Hide content
      } else {
        // Deactivate all boxes
        jsBox.forEach((otherBox, otherIndex) => {
          otherBox.classList.remove('box-active');
          jsBoxHeading[otherIndex].classList.remove('color-active');
          jsBoxSign[otherIndex].innerHTML = '+';
          jsBoxSign[otherIndex].classList.remove('minus');
        });
        
        // Activate the clicked box
        box.classList.add('box-active');
        jsBoxHeading[index].classList.add('color-active');
        jsBoxSign[index].innerHTML = '-';
        jsBoxSign[index].classList.add('minus');
        jsBoxpara.classList.add('shown'); // Show content
      }
    });
  });
