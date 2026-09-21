const { login } = require('./auth');

describe('Smoke Test - Authentication', () => {
  test('Đăng nhập đúng thông tin (admin/123) phải trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
