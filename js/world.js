
function onLoadFile(){
    function updateSystemTime() {
        const systemTimeElement = document.getElementById('system-time');
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
        systemTimeElement.textContent = formattedTime;
    }
    
    // Update system time every second
    setInterval(updateSystemTime, 1000);
    
    // Initial update
    updateSystemTime();
    
    
    var mediaElement = document.getElementById('myAudio'); 
    
    // Function to toggle mute/unmute
    function toggleMute() {
        if (mediaElement.muted) {
            mediaElement.muted = false;
            document.getElementById('muteButton').innerText = 'Mute';
        } else {
            mediaElement.muted = true;
            document.getElementById('muteButton').innerText = 'Unmute';
        }
    }
    
    var audio = document.getElementById("myAudio");
    audio.volume = 0.010;
    
}
