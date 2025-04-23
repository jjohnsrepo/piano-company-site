document.getElementById("entryPiano").addEventListener("click",enterWebsite)
document.getElementById('skip').addEventListener("click", skip)

function enterWebsite() {
    document.getElementById("myAudio").play();
    document.getElementById("myAudio").volume=0.1;
    document.getElementById("entryOverlay").style.display = "none";
    document.getElementById("enterButton").style.display = "none";
    document.getElementById("WTS").className = "swoop";
    document.getElementById("JPS").className = "entrance";
    document.getElementById("pause_text").className = "entrance";
    document.getElementById("piano").classList.add("entranceIcons");
    document.getElementById("pause").classList.add("entranceIcons");
    document.getElementById("page2").classList.add("entrance");
    document.getElementById("HR").classList.add("entrance");
  }
  

function showSection(divID) {
   
    document.getElementById(divID).style.display = 'block';
    
    if (divID != 'aboutMeText') {
        document.getElementById('aboutMeText').style.display = 'none';
    }
    if (divID != 'recordingsText') {
        document.getElementById('recordingsText').style.display = 'none';
    }
    if (divID != 'upcomingEventsText') {
        document.getElementById('upcomingEventsText').style.display = 'none';
    }
    if (divID != 'lessonsText') {
        document.getElementById('lessonsText').style.display = 'none';
    }
    if (divID != 'contactMeText') {
        document.getElementById('contactMeText').style.display = 'none';
    }
}


function pause() {
	document.getElementById("pause").classList.remove('entranceIcons');
    document.body.style.backgroundImage = "url('media/mickey.jpeg')";
    document.getElementById('pause').style.display='none';
    document.getElementById('unpause').style.display='block';
    document.getElementById("myAudio").pause();
}

function unpause(){
    document.getElementById("myAudio").play();
		document.getElementById("unpause").classList.remove('entranceIcons')
        document.body.style.backgroundImage = "url('media/mickey.gif')";
        document.getElementById('pause').style.display='block';
        document.getElementById('unpause').style.display='none';
}

function piano(){
    document.getElementById('aboutMeText').style.display = 'none';
    document.getElementById('recordingsText').style.display = 'none';
    document.getElementById('upcomingEventsText').style.display = 'none';
    document.getElementById('lessonsText').style.display = 'none';
    document.getElementById('contactMeText').style.display = 'none';
}


function skip(){
    document.getElementById("myAudio").play();
	document.getElementById("myAudio").volume=0.1;
	document.getElementById("entryOverlay").style.display = "none";
    document.getElementById("enterButton").style.display = "none";

	
}