const addBtn = document.getElementById('addEntry');
const watchList = document.getElementById('watchList');

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const season = document.getElementById('season').value.trim();
  const episode = document.getElementById('episode').value.trim();
  const minute = document.getElementById('minute').value.trim();

  if (!title) return;

  const li = document.createElement('li');
  li.innerHTML = `<span>${title} - S${season}E${episode} (${minute}min)</span> 
                  <button class="delete">❌</button>`;

  watchList.appendChild(li);

  // Löschen Button
  li.querySelector('.delete').addEventListener('click', () => li.remove());

  // Felder zurücksetzen
  document.getElementById('title').value = '';
  document.getElementById('season').value = '';
  document.getElementById('episode').value = '';
  document.getElementById('minute').value = '';
});
