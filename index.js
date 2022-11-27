let homeptsEl = document.getElementById("homepts-el")
let guestptsEl = document.getElementById("guestpts-el")

let homecount = 0
let guestcount = 0

function homeplusone(){
    homecount += 1
    homeptsEl.textContent = homecount
}

function homeplustwo(){
    homecount += 2
    homeptsEl.textContent = homecount
}

function homeplusthree(){
    homecount += 3
    homeptsEl.textContent = homecount
}

function guestplusone(){
    guestcount += 1
    guestptsEl.textContent = guestcount
}

function guestplustwo(){
    guestcount += 2
    guestptsEl.textContent = guestcount
}

function guestplusthree(){
    guestcount += 3
    guestptsEl.textContent = guestcount
}