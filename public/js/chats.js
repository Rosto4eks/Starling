const chatList = document.querySelector('.chatlist')
let request = new XMLHttpRequest()
const logout = document.querySelector('.logout')
request.open('POST', '/chats', true);
request.setRequestHeader("Content-Type", "application/json");
request.send()
request.addEventListener("load", function () {
     let data = JSON.parse(request.response);
     for (chat in data) {
        const item = document.createElement('li')
        item.innerHTML = `<a class="redirect" href=${data[chat].href}><div class="chat__name">${data[chat].name}</div><div style="background-color: ${data[chat].color}" class="circle"></div></a>`
        chatList.appendChild(item)
     }
});

logout.addEventListener('click', (e) => {
   document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
})
