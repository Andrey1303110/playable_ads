const main_frame = document.querySelector('#main');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const create_scene = function() {
    console.log('ok');
}

function create_bg(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.src = `../images/bg/${scene}.png`;
        main_frame.appendChild(img);
    }
}

function create_table(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.src = `../images/other/table.png`;
        img.classList.add('table');
        main_frame.appendChild(img);
    }
}

function create_logo(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.classList.add('logo');
        img.src = `../images/other/logo.png`;
        main_frame.appendChild(img);
    }
}

let table_objects = [
    'dish_plate',
    'dish_plate',
    'dish_plate',
    'forms',
    'plate',
    'coffe',
    'icecream',
    'rollingpin'
]

let eatable_objects = [
    'cupcake',
    'waffles',
    'fail'
]

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}  
eatable_objects.sort(makeRandomArr);

function create_table_objects() {
    let i = 0;
    while (i < table_objects.length) {
        let img = document.createElement('img');
        img.src = `../images/other/${table_objects[i]}.png`;
        if (table_objects[i] == 'dish_plate') {
            img.classList.add(`${table_objects[i]}`);
            img.classList.add(`${table_objects[i]}_${i}`);
        }
        else {
            img.classList.add(table_objects[i]);
        }
        main_frame.appendChild(img);
        i++;
    }
}

function create_eatable_objects() {
    let i = 0;
    while (i < eatable_objects.length) {
        let img = document.createElement('img');
        img.src = `../images/eat/${eatable_objects[i]}.png`;
        img.classList.add(`eat`);
        img.classList.add(`${'eat_'}${i}`);
        main_frame.appendChild(img);
        i++;
    }
}

function create_dishes() {
    let i = 0;
    while (i < eatable_objects.length) {
        let img = document.createElement('img');
        img.src = `../images/other/dish.png`;
        img.classList.add(`dish`);
        img.classList.add(`${'dish_'}${i}`);
        main_frame.appendChild(img);
        i++;
    }
}

create_bg('main');
create_table('main');
create_logo('main');
create_table_objects('main');
create_eatable_objects('main');
create_dishes('main');