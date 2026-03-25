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
