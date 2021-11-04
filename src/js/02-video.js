
import throttle from 'lodash.throttle';
import video from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STOROGE_KEY = 'videoplayer-current-time';
    
 player.on('timeupdate', throttle(updateTime, 1000));
    
  player.getVideoTitle().then(function(title) {
      console.log('title:', title);
      
  });
   
const  stopTime = localStorage.getItem(STOROGE_KEY);
const parsStopTime = JSON.parse(stopTime);


function updateTime(event) {
  localStorage.setItem(STOROGE_KEY, JSON.stringify(event));
}



// ---------
function startVideo() {
    if (parsStopTime === null) {
        return;
    }
    const startTime = parsStopTime.seconds;

    player.setCurrentTime(startTime).then(function (seconds) {}).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
            break;

            default:
            break;
        }
        });
}
startVideo();





