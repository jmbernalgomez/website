var seenSplash = localStorage.seenScreen


function showScreen(){
    alert("HOLAS");
}

seenSplash ? showScreen() : console.log('Do not show screen');