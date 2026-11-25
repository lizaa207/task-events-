export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;

        li.addEventListener('mouseover', function () {
            li.title = li.textContent;
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let firstClick = true;

    link.addEventListener('click', function (event) {
        if (firstClick) {
            event.preventDefault();
            link.textContent += ' ' + link.href;
            firstClick = false;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.textContent = 'Пункт';

    li.addEventListener('click', function () {
        li.textContent += '!';
    });

    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';

        newLi.addEventListener('click', function () {
            newLi.textContent += '!';
        });

        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
