<script>
  const track = document.querySelector('.testimonial-track');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const testimonials = document.querySelectorAll('.testimonial');
  const itemsPerView = 3;
  const totalItems = testimonials.length;
  let index = 0;

  function updateCarousel() {
    const offset = -(index * (100 / itemsPerView));
    track.style.transform = `translateX(${offset}%)`;
  }

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  next.addEventListener('click', () => {
    if (index < Math.ceil(totalItems / itemsPerView) - 1) {
      index++;
      updateCarousel();
    }
  });

  // Optional: Responsive behavior
  window.addEventListener('resize', () => {
    updateCarousel();
  });
</script>
// JavaScript Document