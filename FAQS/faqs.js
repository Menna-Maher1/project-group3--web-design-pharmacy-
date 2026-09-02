function toggleFaq(el){
  const item = el.closest('.faq-item');
  const icon = item.querySelector('.faq-toggle i');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item.active').forEach(function(openItem){
    openItem.classList.remove('active');
    openItem.querySelector('.faq-toggle i').classList.remove('fa-minus');
    openItem.querySelector('.faq-toggle i').classList.add('fa-plus');
  });

  if(!isActive){
    item.classList.add('active');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  }
}