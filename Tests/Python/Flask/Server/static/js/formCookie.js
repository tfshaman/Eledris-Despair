function WriteCookie() {

    cookievalue = escape(document.myform.customer.value) + "--'|'--";
    cookievalue = cookievalue + escape(document.myform.email.value) + "--'|'--";
    cookievalue = cookievalue + escape(document.myform.number.value) + "--'|'--";
    cookievalue = cookievalue + ";";
    document.cookie = "fCookie" + "=" + cookievalue;

}

function ReadCookie() {
    var user = getCookie("fCookie");
  if (user != "") {

//                  alert(user);
                  cookiearray = user.split("--'|'--");

                  document.getElementById("name").value = cookiearray[0];
                  document.getElementById("mail").value = cookiearray[1];
                  document.getElementById("number").value = cookiearray[2];

               }
            }

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}