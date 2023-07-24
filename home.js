const mobileBtn = document.getElementById('hamburger-icon')
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuicon = document.querySelector('#hamburger-icon i')

mobileBtn.addEventListener('click', () => {
    // Open/hide mobile menu
    mobileMenu.classList.toggle('hidden')

    // Change mobile toggler icon on open/close
    if(!mobileMenu.classList.contains('hidden')) {
        mobileMenuicon.classList.remove('fa-bars')
        mobileMenuicon.classList.add('fa-xmark')
    } else {
        mobileMenuicon.classList.remove('fa-xmark')
        mobileMenuicon.classList.add('fa-bars')
    }
    --
    document.getElementById('next').onclick = function(){
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    }
    document.getElementById('prev').onclick = function(){
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
     
    
  })
/*image slider */
