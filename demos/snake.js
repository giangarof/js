let lastRenderTime = 0;
const snake_speed = 1;

    //exact time the function runs
    function main(currentTime){
        window.requestAnimationFrame(main)
        const secondsLastRender = (currentTime - lastRenderTime) / 1000;
        if(secondsLastRender < 1 / snake_speed) return
        console.log('r')
        lastRenderTime = currentTime;
    }

    window.requestAnimationFrame(main)