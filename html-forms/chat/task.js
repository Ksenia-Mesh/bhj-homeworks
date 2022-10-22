let chat = document.querySelector('div.chat-widget');

let openChat = () => {
    chat.classList.add('chat-widget_active')
};

chat.addEventListener('click', openChat);

const input = document.querySelector('input.chat-widget__input');

console.log(input.value);

input.addEventListener('keyup', event => {
    event.preventDefault();
    
    if ((13 == event.keyCode)) {
        let value = input.value.trim();
        if (value === '') {
            alert('Нельзя отправить пустое сообщение');
        } else {
            let now = new Date();
            let time = now.getHours() + ':' + now.getMinutes();
            const messages = document.querySelector( '.chat-widget__messages' );
            // добавит
            messages.innerHTML += `
              <div class="message_client">
                <div class="message__time">` + time + `</div>
                <div class="message__text">` +
                  value
                + `</div>
              </div>
            `;

            input.value = '';
            setTimeout( () => {
              answer = [
                'Вы не купили ни одного товара для того, чтобы так с нами разговарить!',
                'К сожалению, все операторы сйчас заняты. Не пишите нам больше!',
                'Кто тут?',
                'Мы ничего не будем вам продавать!',
                'Где ваша совесть?',
                'Привет! Пока!',
                'Что Вам от нас нужно?'
            ];
              rnd = Math.floor(Math.random() * 5);
              messages.innerHTML += `
              <div class="message">
                <div class="message__time">` + time + `</div>
                <div class="message__text">` +
                  answer[rnd]
                + `</div>
              </div>
            `;
            }, 1000);
        }
    }
});