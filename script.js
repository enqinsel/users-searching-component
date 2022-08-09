let data = document.querySelector("#data")
let buton = document.querySelector("#buton")
let newUsers = document.querySelector("#newUsers")
let h2Text = document.querySelector("#h2Text")
let home = document.querySelector("#home")
let all = document.querySelector("#all")
// Cards

let nichols = document.querySelector("#nichols")
let insel = document.querySelector("#insel")
let rice = document.querySelector("#rice")
let brower = document.querySelector("#brower")
let campbell = document.querySelector("#campbell")
let morin = document.querySelector("#morin")

// Container - Components
let containerBottom = document.querySelector(".containerBottom")
let usersBottom = document.querySelector(".usersBottom")
let usersTop = document.querySelector(".usersTop")


// Enter key
data.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("buton").click();
    }
});


containerBottom.style.display = "none"

all.style.visibility = "hidden"

all.addEventListener("click", allClick)

function allClick(){
    usersBottom.style.display = "block"
    usersTop.style.display = "block"
    nichols.style.display = "block"
    insel.style.display = "block"
    rice.style.display = "block"
    brower.style.display = "block"
    campbell.style.display = "block"
    morin.style.display = "block"
}


newUsers.addEventListener("click", usersClick)

function usersClick(){
    containerBottom.style.display = "block"
    h2Text.style.display = "none"
    newUsers.style.backgroundColor = "#849FFF"
    newUsers.style.color = "white"
    home.style.backgroundColor = "white"
    home.style.color = "#151B32"
    all.style.visibility = "visible"
}

home.addEventListener("click", homeClick)

function homeClick(){
    containerBottom.style.display = "none"
    h2Text.style.display = "block"
    home.style.backgroundColor = "#849FFF"
    home.style.color = "white"
    newUsers.style.backgroundColor = "white"
    newUsers.style.color = "#151B32"
    all.style.visibility = "hidden"
}

buton.addEventListener("click", butonClick)

function butonClick() {

    if (data.value.length > 0) {
        let array = ["lelah nichols", "engin insel", "annie rice", "robert brower", "amy campbell", "anthony morin"];
        for (let i = 0; i < array.length; i++) {
            if (data.value === array[0]) {
                nichols.style.display = "block"
                insel.style.display = "none"
                rice.style.display = "none"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[1]) {
                nichols.style.display = "none"
                insel.style.display = "block"
                rice.style.display = "none"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[2]) {
                nichols.style.display = "none"
                insel.style.display = "none"
                rice.style.display = "block"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[3]) {
                usersTop.style.display = "none"
                brower.style.display = "block"
                campbell.style.display = "none"
                morin.style.display = "none"
            }
            else if (data.value === array[4]) {
                usersTop.style.display = "none"
                brower.style.display = "none"
                campbell.style.display = "block"
                morin.style.display = "none"
            }
            else if (data.value === array[5]) {
                usersTop.style.display = "none"
                brower.style.display = "none"
                campbell.style.display = "none"
                morin.style.display = "block"
            }
            else {
                alert("Data Not Found!")
            }
            break
        }
    }
    else {
        alert("Enter Data")
    }
}
