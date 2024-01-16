let checkbox = document.querySelectorAll(".box");
function removeclass() {
    checkbox.forEach((ele) => {
        ele.classList.remove("boxcolor");
    });
}

let productValue = "";
checkbox.forEach((ele) => {
    ele.addEventListener("click", () => {
        removeclass();
        ele.classList.add("boxcolor");
        productValue = ele.dataset.value;
    });
});

function getCategary() {
    if (residential.checked) {
        return residential.value
    }
    if (commercial.checked) {
        return commercial.value
    }
}


function submitmy() {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let phone = document.querySelector('#phone')
    let commercial = document.querySelector('#commercial')
    let residential = document.querySelector('#residential')
    let city = document.getElementById("city")
    let state = document.getElementById("state")
    let address = document.querySelector('#address')
    let zipcode = document.getElementById("zipcode")

    // console.log("name", name.value, "email", email.value, "phone", phone.value, "commercial", "city", city.value, "state", state.value, "address", address.value, "zipcode", zipcode.value,  getCategary(), productValue)

    
    var formdata = new FormData();
    formdata.append("email", email.value);
    formdata.append("name", name.value);
    formdata.append("phone", phone.value);
    formdata.append("message", "hello"); // not mandatory field
    formdata.append("city", city.value)
    formdata.append("address", address.value)
    formdata.append("proptype", getCategary())
    formdata.append("zipcode", zipcode.value)
    formdata.append("state", state.value)
    formdata.append("service", productValue)
    formdata.append('type', '3')

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://www.solar365.net.au/blog_admin/api/enquiry.php", requestOptions)
        .then(response => response.json())
        .then(result => {
              name.value = ""
              email.value = ""
              phone.value = ""
              address.value = ""
            // message.value = ""
            // cars.value = ""
              zipcode.value = ""
              city.value = ""
              state.value = ""
            //   proptype.value = ""
            // console.log(result)
         return window.location.href = "./thank-you.html"
        })
        
        .catch(error => console.log('error', error));
}






const select = (el, all = false) => {
el = el.trim()
if (all) {
return [...document.querySelectorAll(el)]
} else {
return document.querySelector(el)
}
}

/**
* Easy event listener function
*/
const on = (type, el, listener, all = false) => {
let selectEl = select(el, all)
if (selectEl) {
if (all) {
selectEl.forEach(e => e.addEventListener(type, listener))
} else {
selectEl.addEventListener(type, listener)
}
}
}

/**
* Easy on scroll event listener 
*/
const onscroll = (el, listener) => {
el.addEventListener('scroll', listener)
}

/**
* Navbar links active state on scroll
*/
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
let position = window.scrollY + 200
navbarlinks.forEach(navbarlink => {
if (!navbarlink.hash) return
let section = select(navbarlink.hash)
if (!section) return
if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
navbarlink.classList.add('active')
} else {
navbarlink.classList.remove('active')
}
})
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)


/**
* Toggle .header-scrolled class to #header when page is scrolled
*/
let selectHeader = select('#header')
if (selectHeader) {
const headerScrolled = () => {
if (window.scrollY > 100) {
selectHeader.classList.add('header-scrolled')
} else {
selectHeader.classList.remove('header-scrolled')
}
}
window.addEventListener('load', headerScrolled)
onscroll(document, headerScrolled)
}

/**
* Back to top button
*/
let backtotop = select('.back-to-top')
if (backtotop) {
const toggleBacktotop = () => {
if (window.scrollY > 100) {
backtotop.classList.add('active')
} else {
backtotop.classList.remove('active')
}
}
window.addEventListener('load', toggleBacktotop)
onscroll(document, toggleBacktotop)
}

/**
* Mobile nav toggle
*/
on('click', '.mobile-nav-toggle', function(e) {
select('#navbar').classList.toggle('navbar-mobile')
this.classList.toggle('bi-list')
this.classList.toggle('bi-x')
})

/**
* Mobile nav dropdowns activate
*/
on('click', '.navbar .dropdown > a', function(e) {
if (select('#navbar').classList.contains('navbar-mobile')) {
e.preventDefault()
this.nextElementSibling.classList.toggle('dropdown-active')
}
}, true)

/**
* Scrool with ofset on links with a class name .scrollto
*/
on('click', '.scrollto', function(e) {
if (select(this.hash)) {
e.preventDefault()

let navbar = select('#navbar')
if (navbar.classList.contains('navbar-mobile')) {
navbar.classList.remove('navbar-mobile')
let navbarToggle = select('.mobile-nav-toggle')
navbarToggle.classList.toggle('bi-list')
navbarToggle.classList.toggle('bi-x')
}
scrollto(this.hash)
}
}, true)

//   updated mobile navbar

function opennav(){
document.getElementById('mobilemenu').classList.toggle('mobile-nav-active')
}

function option(btn, div1, div2, div3, div4) {
let ddbtn = document.querySelector(btn);
let d1 = document.querySelector(div1);
let d2 = document.querySelector(div2);
let d3 = document.querySelector(div3);
let d4 = document.querySelector(div4);
d1.classList.toggle("mobile-menu-active");
d2.classList.remove("mobile-menu-active");
d3.classList.remove("mobile-menu-active");
d4.classList.remove("mobile-menu-active");
}



// off-inspect on pages code

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };






