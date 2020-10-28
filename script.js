let colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];
let changeButton = document.querySelector('.btn');

function changeColor(){
	setInterval(()=> { 
       let colorRange = Math.floor(Math.random() * colors.length);
       let selectedColor = colors[colorRange];
       changeButton.style.background = selectedColor;
            }, 3000);
}

changeColor();


          