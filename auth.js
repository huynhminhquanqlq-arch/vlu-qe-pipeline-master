function login(username, password) {
  // Logic đăng nhập cơ bản
  if (username === "admin" && password === "9999") {
    return true;
  }
  return false;
}

module.exports = { login };
// GHI CHU
