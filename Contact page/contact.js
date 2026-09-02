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

const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you shortly.');
    contactForm.reset();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  const subscribeBtn = document.querySelector('.join .btn-primary');
  const emailInput = document.querySelector('.join input[type="email"]');

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', function () {
      if (emailInput.value.trim() === '') {
        alert('please enter your email');
      } else {
        alert('please enter your email');
      }
    });
  }
});