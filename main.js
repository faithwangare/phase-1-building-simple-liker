"your code goes here"
const errorTxt = document.getElementById('modal')
const likeBtn = document.getElementsByClassName('like-glyph')
errorTxt.className = ('hidden')
for(const btn of likeBtn){
    btn.addEventListener('click', () => {
        mimicServerCall("http://mimicServer.example.com")
        .then(() => {
          if (btn.innerText === 'EMPTY_HEART'){
            btn.innerText = FULL_HEART;
            btn.className = 'activated-heart';
          }
          else{
            btn.innerText = EMPTY_HEART;
            btn.className = '';
          }
        })
        .catch((error) =>  {
          errorTxt.className = ""
          errorTxt.innerText = error;
          setTimeout(() => errorTxt.className = 'hidden', 3000);
        })
    })
}






