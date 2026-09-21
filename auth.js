function login(username, password) {
  // Logic đăng nhập cơ bản
  if (username === "admin" && password === "123") {
    return true;
  }
  return false;
}

module.exports = { login };
