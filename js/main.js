const main_frame = document.querySelector('#main');
let scene;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const create_scene = function() {
    console.log('ok');
}

function create_copyrights() {
    let div = document.createElement('div')
    div.classList.add('copyrights');
    main_frame.appendChild(div);
    let span = document.createElement('span');
    span.innerText = '© 2019 Playtika Santa Monica LLC. All Rights Reserved';
    div.appendChild(span);
    let img = document.createElement('img');
    img.src = `images/other/playtica_logo.png`;
    div.appendChild(img);
}
create_copyrights();

function create_bg(scene) {
    let img = document.createElement('img');
    img.classList.add(`${scene}_bg`);
    img.src = `images/bg/${scene}.png`;
    main_frame.appendChild(img);
    if (scene == 'final') {
        img.classList.add(`${scene}_play`);
    }
}

function create_table(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.classList.add('table');
        img.src = `images/other/table.png`;
        main_frame.appendChild(img);
    }
    if (scene == 'final') {
        let img = document.createElement('img');
        img.classList.add(`table_${scene}`);
        img.src = `images/other/table_${scene}.png`;
        main_frame.appendChild(img);
        img.classList.add(`play`);
    }
}

function create_logo(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.classList.add('logo');
        img.src = `images/other/logo.png`;
        main_frame.appendChild(img);
    }
    if (scene == 'final') {
        let img = document.createElement('img');
        img.classList.add(`logo_${scene}`);
        img.src = `images/other/${scene}_logo.png`;
        main_frame.appendChild(img);
        img.classList.add(`play_logo`);
    }
}

let table_objects = [
    'forms',
    'plate',
    'coffe',
    'icecream',
    'rollingpin'
];

let final_table_objects = [
    'forms',
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

function create_table_objects(scene) {
    if (scene == 'main') {
        let i = 0;
        while (i < table_objects.length) {
            let img = document.createElement('img');
            img.src = `images/other/${table_objects[i]}.png`;
            img.classList.add(table_objects[i]);
            main_frame.appendChild(img);
            i++;
        }
    }
    if (scene == 'final') {
        let i = 0;
        while (i < final_table_objects.length) {
            let img = document.createElement('img');
            img.src = `images/other/${final_table_objects[i]}.png`;
            img.classList.add(final_table_objects[i]);
            img.classList.add(scene);
            main_frame.appendChild(img);
            img.classList.add(`play`);
            i++;
        }
    }
}

function create_eatable_objects(scene) {
    if (scene == 'main') {
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
            if (eatable_objects[i] != 'fail') {
                dish_img.classList.add(`win`);
            }
            main_frame.appendChild(dish_img);
    
            i++;
        }
    }
}

function create_character(scene) {
    if (scene == 'main') {
        let img = document.createElement('img');
        img.src = `images/cat/hand.png`;
        img.classList.add(`cat_hand`);
        main_frame.appendChild(img);
        img = document.createElement('img');
        img.src = `images/cat/body.png`;
        img.classList.add(`cat_body`);
        main_frame.appendChild(img);
    }
    if (scene == 'final') {
        
        let candys_img = document.createElement('img');
        candys_img = document.createElement('img');
        candys_img.src = `images/other/candice.png`;
        candys_img.classList.add(`candice`);
        main_frame.appendChild(candys_img);

        let cat_img = document.createElement('img');
        cat_img = document.createElement('img');
        cat_img.src = `images/cat/${scene}.png`;
        cat_img.classList.add(`cat_${scene}`);
        main_frame.appendChild(cat_img);

        candys_img.classList.add(`play`);
        cat_img.classList.add(`play`);
    }
}

function create_buttons(scene) {
    if (scene == 'final') {

    }
}

function create_main_scene(name) {
    create_bg(name);
    create_table(name);
    create_logo(name);
    create_table_objects(name);
    create_eatable_objects(name);
    create_character(name);
    create_buttons(name);
}

create_main_scene('main');

function result (scene_result) {
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

    img.addEventListener('animationend', function(e) {
        if (e.animationName === 'scene_result') {
            setTimeout(()=>{create_main_scene('final')}, 1000);
        }
    })
}

for(let i = 0; i < document.querySelectorAll('.dish').length; i++) {
    document.querySelectorAll('.dish')[i].addEventListener('click', function(){
        document.querySelectorAll('.dish')[i].classList.remove('active');
        this.classList.toggle('active');
        if (this.classList.contains('fail')) {
            scene = 'fail';
        }
        if (this.classList.contains('win')) {
            scene = 'win';
        }
        result(scene);
    });
}

function drag_drop(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].setAttribute('draggable', false);
    }
}
let images = document.querySelectorAll('img');
drag_drop(images);


