let check = document.getElementById("check");
let month = document.getElementsByClassName("month-price");
let annual = document.getElementsByClassName("annual-price");
check.addEventListener('change', function() {
    if (this.checked) {
      clear_display(month);
        display(annual);
    } else {
              clear_display(annual);
        display(month);
    }
  });


function clear_display(array){
    for (let index = 0; index < array.length; index++) {
        array[index].style = "display: none;"
        
    }
}

function display(array){
    for (let index = 0; index < array.length; index++) {
        array[index].style = "display: block;"
        
    }
}