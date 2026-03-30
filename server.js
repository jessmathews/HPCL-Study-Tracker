const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 49153;
const DATA_DIR = path.join(__dirname, 'data');

const USERS = ['Vppk', 'Jez'];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

fs.mkdirSync(DATA_DIR, { recursive: true });

function userFile(username) {
  return path.join(DATA_DIR, `progress_${username.toLowerCase()}.json`);
}

function readData(username) {
  try {
    const file = userFile(username);
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (e) {
    console.error(`Error reading data for ${username}:`, e.message);
  }
  return { checked: {}, weekDone: {}, confidence: {}, notes: { weak: '', res: '', mock: '' }, examDate: '' };
}

function writeData(username, data) {
  try {
    fs.writeFileSync(userFile(username), JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error(`Error writing data for ${username}:`, e.message);
    return false;
  }
}

function validateUser(username) {
  return USERS.map(u => u.toLowerCase()).includes((username || '').toLowerCase());
}

app.get('/api/users', (req, res) => {
  res.json({ ok: true, users: USERS });
});

app.get('/api/progress/:user', (req, res) => {
  const user = req.params.user;
  if (!validateUser(user)) return res.status(403).json({ ok: false, error: 'Unknown user' });
  res.json({ ok: true, data: readData(user) });
});

app.post('/api/progress/:user', (req, res) => {
  const user = req.params.user;
  if (!validateUser(user)) return res.status(403).json({ ok: false, error: 'Unknown user' });
  const incoming = req.body;
  if (!incoming || typeof incoming !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid payload' });
  }
  const ok = writeData(user, incoming);
  res.json({ ok, savedAt: new Date().toISOString() });
});

app.get('/api/status', (req, res) => {
  const status = USERS.map(u => {
    const file = userFile(u);
    return {
      user: u,
      file,
      exists: fs.existsSync(file),
      savedAt: fs.existsSync(file) ? fs.statSync(file).mtime : null,
    };
  });
  res.json({ ok: true, users: status });
});

app.listen(PORT, () => {
  console.log(`\n  HPCL Study Tracker running at http://localhost:${PORT}`);
  console.log(`  Users: ${USERS.join(', ')}\n`);
});
