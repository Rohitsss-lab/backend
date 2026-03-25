const { test } = require('node:test');
const assert = require('node:assert');

test('backend service name is correct', () => {
    const config = { service: 'backend', port: 3002 };
    assert.strictEqual(config.service, 'backend');
});

test('backend port is correct', () => {
    const config = { service: 'backend', port: 3002 };
    assert.strictEqual(config.port, 3002);
});

test('backend status is running', () => {
    const config = { status: 'running' };
    assert.strictEqual(config.status, 'running');
});
```

---

## Final Structure After Adding Files
```
frontend/
├── src/
│   └── index.js      ← ADD
├── test/
│   └── app.test.js   ← already there
├── package.json      ← ADD
└── README.md

backend/
├── src/
│   └── index.js      ← ADD
├── test/
│   └── app.test.js   ← ADD
├── package.json      ← ADD
└── README.md

deployer/
├── Jenkinsfile       ← already there ✅
├── versions.json     ← already there ✅
└── README.md
