const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value;
  appendMessage('user', message);
  userInput.value = '';

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
    });

    const data = await response.json();
    console.log('BOT reply:', data.reply);
    appendMessage('bot', data.reply);
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    appendMessage('bot', 'Sorry, something went wrong.');
  }
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}