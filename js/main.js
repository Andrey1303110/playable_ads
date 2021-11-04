const main_frame = document.querySelector('#main');
let scene;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const create_scene = function () {
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

function result(scene_result) {
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

    img.addEventListener('animationend', function (e) {
        if (e.animationName === 'scene_result') {
            setTimeout(() => { create_main_scene('final') }, 1000);
        }
    })
}

let dish = document.querySelectorAll('.dish');
for (let i = 0; i < dish.length; i++) {
    dish[i].addEventListener('click', function () {
        dish[i].classList.remove('active');
        if (screen.orientation.type === 'portrait-primary') {
            let styles = this.style.transform.split(' ');
            let translateY;
            let translateX;
            for (let i = 0; i < styles.length; i++) {
                if (styles[i].includes('translateY')) {
                    translateY = styles[i].replace(/[^.\d]/g, '');
                }
                if (styles[i].includes('translateX')) {
                    translateX = styles[i].replace(/[^.\d]/g, '');
                }
            }
            if (dish[i].style.left.slice(0, -2) > screen.width) {
                dish[i].style.transform = 'translateX' + `( ${translateX * -1 + 8}% ) ` + 'translateY' + `( ${translateY - 80}% ) ` + styles[2] + ' ' + 'rotate(27deg)';
            }
            if (dish[i].style.left.slice(0, -2) < screen.width) {
                dish[i].style.transform = 'translateX' + `( ${translateX *-1 - 8}% ) ` + 'translateY' + `( ${translateY - 80}% ) ` + styles[2] + ' ' + 'rotate(-27deg)';
            }
        }
        if (screen.orientation.type === 'landscape-primary') {
            this.classList.toggle('active');
        }
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

window.addEventListener('resize', setSize, true);

function setSize() {
    //main_frame.style.height = main_frame.clientWidth + 'px';
    if (screen.orientation.type === 'landscape-primary') {
        main_frame.style.height = window.innerHeight + 'px';
        main_frame.style.width = window.innerHeight + 'px';
        //main_frame.style.transform = `translateY(${(main_frame.clientHeight - window.innerWidth)/2 *-1 + 'px'})`;
    }
    if (screen.orientation.type === 'portrait-primary') {
        if (window.outerHeight > 960) {
            main_frame.style.height = '960px';
            main_frame.style.width = '960px';
            let scale = window.outerHeight / 960;
            main_frame.style.transform = `scale(${scale}) translateY(${((960 * scale - 960) / 2) + 'px'})`;
        }
        if (window.outerHeight <= 960) {
            main_frame.style.height = window.outerHeight + 'px';
            main_frame.style.width = main_frame.style.height;
            main_frame.style.transform = `translateX(${(main_frame.clientHeight - window.outerWidth) / 2 * -1 + 'px'}) scaleX(1)`;
        }
    }
}

setSize();

//alert(window.innerHeight)

if (screen.height / screen.width > 1.5) {
    let cof = Math.sqrt((screen.height / 1.5) / screen.width) / 10;
    cof = cof + (cof / 10);
    for (let i = 0; i < images.length; i++) {
        let current_left = getComputedStyle(images[i]).left;
        images[i].style.left = current_left;
        if ((current_left.includes('px')) && (current_left.slice(0, -2) != screen.height / 2) && (current_left.slice(0, -2) != 0)) {
            if (current_left.slice(0, -2) < screen.height / 2) {
                images[i].style.left = images[i].style.left.slice(0, -2) * 1 + screen.width * cof + 'px';
                console.log(images[i].classList);
            }
            if (current_left.slice(0, -2) > screen.height / 3) {
                //console.log(images[i].style.left);
                images[i].style.left = images[i].style.left.slice(0, -2) * 1 - screen.width * cof + 'px';
                //console.log(images[i].style.left);
            }
        }
        if (images[i].classList.contains('logo') || images[i].classList.contains('main_bg')) {

        }
        else if (images[i].classList.value == 'cat_body' || images[i].classList.value == 'cat_hand') {
            images[i].style.transform = `translateX(-50%)`;
            images[i].style.left = '';
            images[i].style.left = current_left.slice(0, -2) - cof * 222 + 'px';
        }
        else if (images[i].classList.contains('table')) {
            images[i].style.transform = `translateX(-50%) translateY(${cof * 15}%)`;
        }
        else {
            images[i].style.transform = `translateX(-50%) translateY(${cof * 100}%) scale(.8)`;
        }
    }
}
