
// Datum van vandaag (maand dag, jaar)
var today = new Date();
document.getElementById('date').innerHTML = today.getDate();

var dagen = new Array('Sundag', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

document.getElementById('date').innerHTML =  dagen[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()]  + ' ' + today.getFullYear();

// 


// Days from arrival
showDaysSpend();

function showDaysSpend() {
	var startDate = new Date(2019,11,1); 	// start of adadventure  
	var day = 24 * 60 * 60 * 1000; 			// calculate 1 day in milliseconds: hours * minutes * seconds * milliseconds
	var days = Math.abs((today.getTime() - startDate.getTime()) / day); 		// calculate difference

	document.getElementById('daysFromArrival').innerHTML = Math.round(days); 	// render days
}

//


// Analog Clock
AnalogInitClock();

function AnalogInitClock(){

	var hourHand = document.getElementById('hour');
	var minuteHand = document.getElementById('minute');
	var secondHand = document.getElementById('second');

	today = new Date();
  	var hour = today.getHours() % 12;  // 0 - 23
  	var minute = today.getMinutes();
  	var second = today.getSeconds();

  	var hourDeg =  (hour * 30) + (0.5 * minute); // every hour, 30 deg
  	var minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 deg. 6 / 60
  	var secondDeg = second * 6; // 360 / 60

  	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  	minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
  	secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

  	setInterval(AnalogInitClock, 1000);

};
//


// digital Clock
DigitalInitClock();

function DigitalInitClock() {
	renderClock();
	setInterval(renderClock, 1000);
}

function renderClock() {
	var clock = document.getElementById('digitalClock');
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

function flashSeperator(seconds) {
	var sepClass = '';

	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

function getCurrentTime(date) {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

//

// Thema dark/light switch


 	var today = new Date();
	var checkbox = document.getElementById('switch');
	var thema = '';
    timeSwitch();

     function timeSwitch(){
		if( today.getHours() < 6 || today.getHours() >= 18  ){
        	document.documentElement.setAttribute('data-theme', 'dark');
        	
        	thema = 'dark';
        	whichModes();
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            
            thema = 'light';
            whichModes();
        }
    };


    function whichModes() {
    	if (thema == 'dark') {
    		document.getElementById('switch').innerHTML = '<i data-feather="moon" id="iconModes"></i>';
    		feather.replace()
    	} else {
    		document.getElementById('switch').innerHTML = '<i data-feather="sun" id="iconModes"></i>';
    		feather.replace()
    	}
    };

   
    checkbox.addEventListener('click', function() {

    	if(thema == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            trans()
            thema = 'light';
            whichModes()
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            trans()
            thema = 'dark';
            whichModes()
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
        	document.documentElement.classList.remove('transition')
        }, 1000)
    }


//


// Menu

menu();

function menu(){
	var sidebar = document.getElementById('sidebar');
	document.getElementById('sidebarCollapse').onclick = function() {
		if (sidebar.classList == 'active'){
			sidebar.classList.remove('active');
		} else {
			sidebar.classList.add('active');
		}
	}
};

//