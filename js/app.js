document.querySelector('.sing-up-btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.form__right-side').classList.toggle('active');
    document.querySelector('.form__left-side').classList.toggle('active');
    document.querySelector('.forget__password').classList.toggle('active');
    document.querySelector('.submit-btn').classList.toggle('active');
});

const btn = document.querySelector('.sing-up-btn');
btn.addEventListener('click', function(){
    btn.innerHTML = 
        (btn.innerHTML === 'Sign In') ? btn.innerHTML = 'Sign Up' : btn.innerHTML = 'Sign In';       
});

const title = document.querySelector('.form__text-title');
btn.addEventListener('click', function(){
    title.innerHTML = 
        (title.innerHTML === 'Sign In with') ? title.innerHTML = 'Sign Up with' : title.innerHTML = 'Sign In with';       
});