document.getElementById("entryPiano").addEventListener("click",enterWebsite)
document.getElementById('skip').addEventListener("click", skip)
document.getElementById("chatIcon").addEventListener("click",showChat)
document.getElementById("prompt").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

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
    document.getElementById("chatbot").classList.add("entranceIcons");
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

function showChat(){
    document.getElementById("chatbot-container").style.display="flex"
}


function closeChat(){
    document.getElementById("chatbot-container").style.display="none" 
}


// Google gemeni api call and code

const apiKey = 'AIzaSyALd19fxVH4Tr-NypJn4IjSrJPOamI9MrM';

let history = [
  {
    role: "user",
    parts: [{
      text: "You are a world-renowned concert pianist. Respond like a master musician and teacher, and provide detailed, professional answers about piano, technique, and performance. Be sure to keep responses brief and provide lots of resources"
    }]
  }
];

async function sendMessage() {
  const promptBox = document.getElementById('prompt');
  const prompt = promptBox.value.trim();
  if (!prompt) return;

  history.push({ role: 'user', parts: [{ text: prompt }] });
  updateChatUI('user', prompt);
  promptBox.value = '';

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: history })
  });

  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '⚠️ No response';
  history.push({ role: 'model', parts: [{ text: reply }] });
  updateChatUI('model', reply);
}

function updateChatUI(role, text) {
  const chat = document.getElementById('chat');
  const message = document.createElement('div');
  message.className = 'message';
  const formatted = marked.parse(text);
  message.innerHTML = `<span class="${role}">${role === 'user' ? 'You' : 'Gemini'}:</span> ${formatted}`;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}
