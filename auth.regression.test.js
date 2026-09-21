const { login } = require('./auth');

describe('Regression Test - Authentication Exceptions', () => {
  test('Sai mật khẩu phải trả về false', () => {
    expect(login('admin', '9999')).toBe(false);
  });

  test('Username rỗng phải trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt sai phải trả về false', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('Tài khoản không tồn tại phải trả về false', () => {
    expect(login('hacker', '123')).toBe(false);
  });
});
