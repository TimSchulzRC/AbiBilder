const loginData = {
  user: 96360,
  password: 1537277,
};

$("form").on("submit", function (e) {
  let user = $("input[name='user']").val().toLowerCase();
  let password = $("input[name='password']").val();
  user = stringToHash(user);
  password = stringToHash(password);
  if (user == loginData.user && password == loginData.password) {
    window.location.href = "page.html";
  } else {
    alert("Name oder Passwort ist inkorrekt");
  }
  e.preventDefault();
});

function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}
