let current = 0;
        const lights = ["red", "yellow", "green"];
        const colors = {"red": "red", "yellow": "yellow", "green": "green"};
        
        function changeLight() {
            document.getElementById(lights[current]).style.background = "gray";
            current = (current + 1) % lights.length;
            document.getElementById(lights[current]).style.background = colors[lights[current]];
        }