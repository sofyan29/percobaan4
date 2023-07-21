document.addEventListener('keydown', function(event) {
    const slider = document.querySelector('.photo-slider');
    const container = document.querySelector('.photo-container');
    const keyCode = event.keyCode;
    
    if (keyCode === 37) {
      // Panah kiri
      container.style.transform = 'translateX(100%)';
    } else if (keyCode === 39) {
      // Panah kanan
      container.style.transform = 'translateX(-100%)';
    }
    
    // Atur transisi kembali setelah 0.3 detik
    setTimeout(function() {
      container.style.transform = 'translateX(0)';
    }, 300);
  });

  
  