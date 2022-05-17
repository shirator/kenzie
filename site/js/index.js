const showcase = document.querySelector('.showcase');


function generateCards(list) {
    for(i in data) {
        const card_showcase = document.createElement('section')
        card_showcase.id = data[i].id
        card_showcase.className = 'card-showcase';
        showcase.appendChild(card_showcase)
        const figure = document.createElement('figure');
        figure.className = 'figure'
        card_showcase.appendChild(figure)
        const img = document.createElement('img')
        img.src = data[i].img;
        figure.appendChild(img);
        const ticket = document.createElement('p')
        ticket.className = 'ticket';
        ticket.innerText = data[i].tag;
        card_showcase.appendChild(ticket);
        const h3 = document.createElement('h3');
        h3.innerText = data[i].nameItem;
        card_showcase.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = data[i].description;
        card_showcase.appendChild(p);
        const small = document.createElement('small');
        small.innerText = `R$: ${data[i].value.toFixed(2)}`;
        card_showcase.appendChild(small);
        const div_btn = document.createElement('div');
        card_showcase.appendChild(div_btn);
        const button = document.createElement('button');
        button.className = data[i].id
        button.innerText = data[i].addCart;
        div_btn.appendChild(button);
        button.onclick = click;

    }
}

const list_content = document.querySelector('.list-content')
list_content.innerHTML = ''

function click() {
    const div_cart = document.createElement('div')
    list_content.appendChild(div_cart)
    div_cart.className = 'div-cart'

    const div_img = document.createElement('div')
    div_cart.appendChild(div_img)
    div_img.className = 'div-img'

    const div_text = document.createElement('div')
    div_cart.appendChild(div_text)
    div_text.className = 'div-text'

    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Remover produto'
    
    // pega loc do click
    const node = event.target.parentNode.parentNode;
    const section = document.getElementById(node.id);

    const foto = section.querySelector('figure');
    const cloneF = foto.cloneNode(true);

    const nome = section.querySelector('h3');
    const cloneN = nome.cloneNode(true);

    const texto = section.querySelector('small');
    const cloneT = texto.cloneNode(true);


    div_img.appendChild(cloneF)
    div_text.appendChild(cloneN)
    div_text.appendChild(cloneT)
    div_text.appendChild(btnRemove)
}

generateCards(data)
