/* eslint-disable*/
import '@babel/polyfill';
import {displayMap} from './mapbox'
import {login,logout} from './login';
import {signup} from './signup';
import {tourCreate} from './tourCreate'
import {updateSettings} from './updateSettings'
import {bookTour} from './stripe'

//DOM ELEMENTS
const mapBox=document.getElementById('map');
const loginForm=document.querySelector('.form--login');
const signupForm=document.querySelector('.form--signup');
const createTourForm=document.querySelector('.form--tourCreate')
const btnsignup=document.querySelector('.btn-signup')

const logOutBtn=document.querySelector('.nav__el--logout');
const userDataForm=document.querySelector('.form-user-data');
const userPasswordForm=document.querySelector('.form-user-password');
const bookBtn=document.getElementById('book-tour')



//Delegation
if(mapBox){
    const locs=JSON.parse(document.getElementById('map').dataset.location);
    displayMap(locs);
}
if(signupForm){
    btnsignup.addEventListener('click',e=>{
        console.log("gone")
        // const name=document.getElementById('name').value
        // const email=document.getElementById('email').value;
        // const password=document.getElementById('password').value;
        // const passwordConfirm=document.getElementById('passwordConfirm').value;
        // const photo=document.getElementById('photo').files[0]
        const form=new FormData();

        form.append('name',document.getElementById('name').value);
        form.append('email',document.getElementById('email').value);
        form.append('password',document.getElementById('password').value);
        form.append('passwordConfirm',document.getElementById('passwordConfirm').value);
        form.append('photo',document.getElementById('photo').files[0]);


        console.log('indexjs',form)
        e.preventDefault();
        signup(form)
        console.log("outside")
    })
}
  


if(loginForm){
    loginForm.addEventListener('submit',e=>{
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        console.log('indexjs',email,password)
        e.preventDefault();
        login(email,password)
    })
};
if(createTourForm){
    createTourForm.addEventListener('submit',e=>{
        const name=document.getElementById('name').value;
        const ratingsQuantity=document.getElementById('ratingsQuantity').value;
        const ratingsAverage=document.getElementById('ratingsAverage').value;
        const maxGroupSize=document.getElementById('price').value;
        const price=document.getElementById('price').value;
        const duration=document.getElementById('duration').value;
        const summary=document.getElementById('summary').value;
        const description=document.getElementById('description').value;
        console.log('index',name);
        e.preventDefault();
        tourCreate(name,ratingsQuantity,ratingsAverage,maxGroupSize,price,duration,summary,description)

    })
}


if(logOutBtn) logOutBtn.addEventListener('click',logout)

if(userDataForm){
    userDataForm.addEventListener('submit',e=>{
        console.log('Going')
        e.preventDefault();
        const form=new FormData();

        form.append('name',document.getElementById('name').value);
        form.append('email',document.getElementById('email').value);
        form.append('photo',document.getElementById('photo').files[0]);
        console.log(form)
        updateSettings(form,'data')
    })
}
if(userPasswordForm){
    userPasswordForm.addEventListener('submit',async e=>{
        console.log('Going')
        e.preventDefault();
        document.querySelector('.btn--save-password').textContent='Updating....'
        const passwordCurrent=document.getElementById('password-current').value;
        const password=document.getElementById('password').value;
        const passwordConfirm=document.getElementById('password-confirm').value;


        await updateSettings({passwordCurrent,password,passwordConfirm},'password');

        document.querySelector('.btn--save-password').textContent='Save password'

        document.getElementById('password-current').value='';
        document.getElementById('password').value='';
        document.getElementById('password-confirm').value=''
    })
};


// if(bookBtn){
//     bookBtn.addEventListener('click',e=>{
//         e.target.textContent='Processing...'
//         const {tourId}=e.target.dataset;
//         bookTour(tourId)
//     })
// }

