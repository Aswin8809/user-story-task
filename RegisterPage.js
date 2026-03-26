fetch("https://example.com/api/register", {
  method: "POST",   // ✅ REQUIRED
  headers: {        // ✅ REQUIRED
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: "test",
    password: "123456"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
