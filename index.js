window.onload = function (){
    let btn = document.getElementById("money")
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")
    btn.onclick = mi;//mi is the short form of money increase
    let money = 0;    
    let x = 240;
    let y = 150;
    let clear = 1000;
    let nill = 0

    function mi(){
        // we are making the mi function
        money += 1
        
        if (money==10){
            x -= 30
        }

        if (money == 100){
            x -= 30
            alert("You are on fire 🔥🔥")
        }

        context.clearRect(nill, nill, clear, clear)
        context.beginPath()        
        context.font = '100px Helvetica'       
        context.lineWidth = 10;
        context.fillStyle = "orange";        
        context.fillText(money, x, y)        
        context.strokeStyle = "black";        
        context.strokeText(money, x, y)
        

    }

   
    
}


