const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// adding images
let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// changing html

// header Nav
let navServices = document.querySelector(".container a:nth-child(1)")
let navProducts = document.querySelector(".container a:nth-child(2)")
let navVision = document.querySelector(".container a:nth-child(3)")
let navFeatures = document.querySelector(".container a:nth-child(4)")
let navAbout = document.querySelector(".container a:nth-child(5)")
let navContact = document.querySelector(".container a:nth-child(6)")

navServices.textContent = siteContent["nav"]["nav-item-1"]
navProducts.textContent = siteContent["nav"]["nav-item-2"]
navVision.textContent = siteContent["nav"]["nav-item-3"]
navFeatures.textContent = siteContent["nav"]["nav-item-4"]
navAbout.textContent = siteContent["nav"]["nav-item-5"]
navContact.textContent = siteContent["nav"]["nav-item-6"]

// CTA
let ctaHeader = document.querySelector(".cta-text h1")
let ctaButton = document.querySelector(".cta-text button")

ctaHeader.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"]

// MainContent
///////////////////////// header variables//

// top-content//
let headerFeatures = document.querySelector(".top-content div:nth-of-type(1) h4")
let headerAbout = document.querySelector(".top-content div:nth-of-type(2) h4")
// bottom-content//
let headerServices = document.querySelector(".bottom-content div:nth-of-type(1) h4")
let headerProduct = document.querySelector(".bottom-content div:nth-of-type(2) h4")
let headerVision = document.querySelector(".bottom-content div:nth-of-type(3) h4")
////////////////////////////// p variables //

// top-content//
let contentFeatures = document.querySelector(".top-content div:nth-of-type(1) p")
let contentAbout = document.querySelector(".top-content div:nth-of-type(2) p")
// bottom-content//
let contentServices = document.querySelector(".bottom-content div:nth-of-type(1) p")
let contentProduct = document.querySelector(".bottom-content div:nth-of-type(2) p")
let contentVision = document.querySelector(".bottom-content div:nth-of-type(3) p")

//////////////// changing content of variables ///////////////
headerFeatures.textContent = siteContent["main-content"]["features-h4"]
headerAbout.textContent = siteContent["main-content"]["about-h4"]
headerServices.textContent = siteContent["main-content"]["services-h4"]
headerProduct.textContent = siteContent["main-content"]["product-h4"]
headerVision.textContent = siteContent["main-content"]["vision-h4"]

contentFeatures.textContent = siteContent["main-content"]["features-content"]
contentAbout.textContent = siteContent["main-content"]["about-content"]
contentServices.textContent = siteContent["main-content"]["services-content"]
contentProduct.textContent = siteContent["main-content"]["product-content"]
contentVision.textContent = siteContent["main-content"]["vision-content"]


//Contact Section
let contactHeader = document.querySelector(".contact h4")
let contactAddress = document.querySelector(".contact p:nth-child(2)")
let contactPhone = document.querySelector(".contact p:nth-child(3)")
let contactEmail = document.querySelector(".contact p:nth-child(4)")

contactHeader.textContent = siteContent["contact"]["contact-h4"]
contactAddress.textContent = siteContent["contact"]["address"]
contactPhone.textContent = siteContent["contact"]["phone"]
contactEmail.textContent = siteContent["contact"]["email"]

//Footer
let copyRight = document.querySelector("footer p")
copyRight.textContent = siteContent["footer"]["copyright"]

/// task 3; change color of navigation text to be green ///
let allNavLinks = document.querySelectorAll("nav a")
allNavLinks.forEach(link => link.style.color = "green")
/// adding 2 new items to navigation ////
let navigation = document.querySelector("nav")

const signUpAtrri = {
  href: '#',
  textContent: 'Sign Up',
}
const galleryAtrri = {
  href: "#",
  textContent: "Gallery"
}

const signUp = document.createElement('a')
const gallery = document.createElement('a')

signUp.href = signUpAtrri.href
signUp.textContent = signUpAtrri.textContent

gallery.href = galleryAtrri.href
gallery.textContent = galleryAtrri.textContent

navigation.appendChild(signUp)
navigation.appendChild(gallery)