
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