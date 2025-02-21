function startTrafficLight() {
        function turnOnLight(color) {
            document.querySelectorAll(".light").forEach(light => light.className = "light");
            document.getElementById(color).classList.add(color);
        }
    

    function cycleLights() {
        turnOnLight("red");
        setTimeout(() => {
            turnOnLight("yellow");
            setTimeout(() => {
                turnOnLight("green");
                setTimeout(cycleLights, 3000); 
            }, 1000);
        }, 3000); 
    }

    cycleLights(); 
}

startTrafficLight(); 