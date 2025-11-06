const addBtn = document.getElementById('addEntry');
const watchList = document.getElementById('watchList');

// Lade Einträge aus localStorage
let entries = JSON.parse(localStorage.getItem('watchEntries')) || [];
entries.forEach(entry => addListItem(entry));

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const season = document.getElementById('season').value.trim();
  const episode = document.getElementById('episode').value.trim();
  const minute = document.getElementById('minute').value.trim();

  if (!title) return;

  const entry = { title, season, episode, minute };
  entries.push(entry);
  localStorage.setItem('watchEntries', JSON.stringify(entries));
  addListItem(entry);

  // Felder zurücksetzen
  document.getElementById('title').value = '';
  document.getElementById('season').value = '';
  document.getElementById('episode').value = '';
  document.getElementById('minute').value = '';
});

function addListItem(entry) {
  const li = document.createElement('li');
  li.innerHTML = `<span>${entry.title} - S${entry.season}E${entry.episode} (${entry.minute}min)</span> 
                  <button class="delete">❌</button>`;
  watchList.appendChild(li);

  // Löschen Button
  li.querySelector('.delete').addEventListener('click', () => {
    watchList.removeChild(li);
    entries = entries.filter(e => e !== entry);
    localStorage.setItem('watchEntries', JSON.stringify(entries));
  });
}
