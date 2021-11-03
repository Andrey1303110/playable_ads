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
        img.classList.add('main_bg');
        img.src = `images/bg/${scene}.png`;
        main_frame.appendChild(img);
    }
}

function create_table(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.classList.add('table');
        img.src = `images/other/table.png`;
        main_frame.appendChild(img);
    }
}

function create_logo(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.classList.add('logo');
        img.src = `images/other/logo.png`;
        main_frame.appendChild(img);
    }
}

let table_objects = [
    'forms',
    'plate',
    'coffe',
    'icecream',
    'rollingpin'
];

let eatable_objects = [
    'cupcake',
    'waffles',
    'fail'
];

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}  
eatable_objects.sort(makeRandomArr);

function create_table_objects() {
    let i = 0;
    while (i < table_objects.length) {
        let img = document.createElement('img');
        img.src = `images/other/${table_objects[i]}.png`;
        img.classList.add(table_objects[i]);
        main_frame.appendChild(img);
        i++;
    }
}

function create_eatable_objects() {
    let i = 0;
    while (i < eatable_objects.length) {

        let dish_plate_img = document.createElement('img');
        dish_plate_img.src = `images/other/dish_plate.png`;
        dish_plate_img.classList.add(`dish_plate`);
        dish_plate_img.classList.add(`${'dish_plate_'}${i}`);
        main_frame.appendChild(dish_plate_img);

        let eat_img = document.createElement('img');
        eat_img.src = `images/eat/${eatable_objects[i]}.png`;
        eat_img.classList.add(`eat`);
        eat_img.classList.add(`${'eat_'}${i}`);
        main_frame.appendChild(eat_img);

        let dish_img = document.createElement('img');
        dish_img.src = `images/other/dish.png`;
        dish_img.alt = 'dish';
        dish_img.classList.add(`dish`);
        dish_img.classList.add(`${'dish_'}${i}`);
        if (eatable_objects[i] == 'fail') {
            dish_img.classList.add(`fail`);
        }
        main_frame.appendChild(dish_img);

        i++;
    }
}

function create_cat() {
    let img = document.createElement('img');
    img.src = `images/cat/hand.png`;
    img.classList.add(`cat_hand`);
    main_frame.appendChild(img);
    img = document.createElement('img');
    img.src = `images/cat/body.png`;
    img.classList.add(`cat_body`);
    main_frame.appendChild(img);
}

function create_main_scene() {
    create_bg('main');
    create_table('main');
    create_logo('main');
    create_table_objects('main');
    create_eatable_objects('main');
    create_cat('main');
}

create_main_scene();

function result (scene_result) {
    console.log('you ' + scene_result);

    let rays_img = document.createElement('img');
    rays_img.src = `images/other/rays.png`;
    rays_img.classList.add(`rays`);
    main_frame.appendChild(rays_img);

    let img = document.createElement('img');
    img.src = `images/other/${scene_result}.png`;
    img.classList.add(`${scene_result}`);
    img.classList.add(`scene_result`);
    main_frame.appendChild(img);

    rays_img.classList.add(`now_play`);
    img.classList.add(`now_play`);
}

let dishes = document.querySelector('#main');
dishes.addEventListener('click', function(e) {
    let scene;
    if (e.target.alt == 'dish') {
        for(let i = 0; i < document.querySelectorAll('.dish').length; i++) {
            document.querySelectorAll('.dish')[i].classList.remove('active');
        }
        e.target.classList.toggle('active');
    }
    if (e.target.classList.contains('fail')) {
        scene = 'fail';
    }
    else scene = 'win';
    result(scene);
}, false);

function drag_drop(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].setAttribute('draggable', false);
    }
}
let images = document.querySelectorAll('img');
drag_drop(images);
