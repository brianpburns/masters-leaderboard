/* When the user clicks on the row, 
toggle between hiding and showing the dropdown content */
export function toggleDropdown() {
  const rows: any = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.style.background = 'white';
  });
  this.style.background = '#ddd';
  const dropdown = this.parentElement.nextElementSibling;
  const isOpen = dropdown.classList.contains('show') ? true : false;

  // If there's any other dropdown open, close it
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });

  dropdown.classList.toggle('show');
  if (isOpen) {
    dropdown.classList.toggle('show');
    rows.forEach(row => {
      row.style.background = 'white';
    });
  }
}

export function responsiveDesign() {
  if (window.innerWidth < 600) {
    document.querySelector('table').classList.add('mobile');
  } else {
    document.querySelector('table').classList.remove('mobile');
  }
}