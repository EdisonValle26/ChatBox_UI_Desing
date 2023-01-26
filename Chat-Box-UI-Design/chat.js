const chatElement = document.querySelector('.chat');

document.querySelector('.chat-button').addEventListener('click', () => {
    chatElement.classList.toggle('open');
    setTimeout(() => {
        let chatBody = document.querySelector('.chat .chat__body');
        chatBody.scrollTo({
            top: chatBody.scrollHeight, 
        })
    });
})

document.querySelectorAll('.chat, .chat-button').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})

document.querySelector('.chat .chat__header a').addEventListener('click', (e) => {
   e.preventDefault();
   chatElement.classList.remove('open'); 
})

window.addEventListener('click', (e) => {
    chatElement.classList.remove('open');
})