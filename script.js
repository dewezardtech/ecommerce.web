const openMenu = () => {
     document.querySelector('.backdrop').classList.add('active');
     document.querySelector('.try').classList.add('active');
 };
 
 const closeMenu = () => {
     document.querySelector('.backdrop').classList.remove('active');
     document.querySelector('.try').classList.remove('active');
 };
 const openAccount = () => {
    document.querySelector('.backdropaccside').classList.add('active');
    document.querySelector('.accside').classList.add('active');
};

const closeAccount = () => {
    document.querySelector('.backdropaccside').classList.remove('active');
    document.querySelector('.accside').classList.remove('active');
};

 document.getElementById('menuBtn').onclick = e => {
     e.preventDefault();
     openMenu();
 };
 
 document.querySelector('.try button.close').onclick = e => {
     closeMenu();
 };
 document.querySelector('.backdrop').onclick = e => {
     closeMenu();
 };
 
 document.getElementById('accBtn').onclick = e => {
    e.preventDefault();
    openAccount();
};

document.getElementById('acctBtn').onclick = e => {
    e.preventDefault();
    openAccount();
};


document.querySelector('.accside button.closeAcc').onclick = e => {
    closeAccount();
};
document.querySelector('.backdropaccside').onclick = e => {
    closeAccount();
}; //ook

 // for account

 function enlargeImage() {
    document.getElementById('enlarged-image').classList.add('active');     //add big size image
 }

 function shrinkImage() {
    document.getElementById('enlarged-image').classList.remove('active');  //remove big size image
 }