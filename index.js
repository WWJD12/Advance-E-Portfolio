//template_e0nx6hd
//service_qrp0o71
//sf8KrxlWlDkrSqJDS


function contact(event) {
   event.preventDefault();
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += " modal__overlay--visible" 
   emailjs
    .sendForm(
    'service_qrp0o71',
    'template_e0nx6hd',
    event.target,
    'sf8KrxlWlDkrSqJDS'
    ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
    "The email service is temporarily unavalible. Please contact me directly on c.vance7777@hotmail.com"
    );
    })
}

function toggleModal() {
    // toggle modal 
    document.body.classList += " modal__open";
}
