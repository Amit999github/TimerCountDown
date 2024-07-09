const endDate = "22 june 2024 00:00 pm";

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    

function clock () {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/ 1000;
    if (diff < 0) return;
    // convert into Days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours 
    inputs[1].value = Math.floor((diff / 3600) % 24);
    // converts into minuts
    inputs[2].value = Math.floor((diff / 60) % 60);
    // converts into sec
    inputs[3].value = Math.floor((diff) % 60);


}


// for calling the function of clock()
setInterval(
    () =>{
        clock();
    },
    1000
)