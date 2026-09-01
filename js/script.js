// Category
  const categoryCollapse = document.getElementById('categoryCollapse');
  const categoryIcon = document.getElementById('categoryIcon');

  categoryCollapse.addEventListener('show.bs.collapse', () => {
    categoryIcon.style.transform = 'rotate(0deg)';
  });
  categoryCollapse.addEventListener('hide.bs.collapse', () => {
    categoryIcon.style.transform = 'rotate(-90deg)';
  });