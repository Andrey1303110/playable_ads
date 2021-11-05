const main_frame = document.querySelector('#main');
var scene;

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function create_copyrights(scene) {
    if (scene == 'main') {
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
}

function create_bg(scene) {
    let img = document.createElement('img');
    img.classList.add(`${scene}_bg`);
    img.src = `images/bg/${scene}.png`;
    main_frame.appendChild(img);
    if (scene == 'final') {
        img.style.animationPlayState = 'running';

        for (let i = 0; i < 3; i++) {
            let sparkle = document.createElement('img');
            sparkle.classList.add(`sparkle_${i}`);
            sparkle.src = `images/other/sparkle.png`;
            main_frame.appendChild(sparkle);
        }   
    }
}

function create_table(scene) {
    let img = document.createElement('img');
    img.classList.add(`table_${scene}`);
    img.src = `images/other/table_${scene}.png`;
    main_frame.appendChild(img);
    if (scene == 'final') {
        img.style.animationPlayState = 'running';
    }
}

function create_logo(scene) {
    let img = document.createElement('img');
    img.classList.add(`logo_${scene}`);
    img.src = `images/other/${scene}_logo.png`;
    main_frame.appendChild(img);
    if (scene == 'final') {
        img.style.animationPlayState = 'running';
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
    let i = 0;
    if (scene == 'main') {
        while (i < table_objects.length) {
            let img = document.createElement('img');
            img.src = `images/other/${table_objects[i]}.png`;
            img.classList.add(table_objects[i]);
            main_frame.appendChild(img);
            i++;
        }
    }
    if (scene == 'final') {
        while (i < final_table_objects.length) {
            let img = document.createElement('img');
            img.src = `images/other/${final_table_objects[i]}.png`;
            img.classList.add(final_table_objects[i]);
            img.classList.add(scene);
            main_frame.appendChild(img);
            img.style.animationPlayState = 'running';
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
        let img_cat_hand = document.createElement('img');
        img_cat_hand.src = `images/cat/hand.png`;
        img_cat_hand.classList.add(`cat_hand`);
        
        img_cat_body = document.createElement('img');
        img_cat_body.src = `images/cat/body.png`;
        img_cat_body.classList.add(`cat_body`);

        main_frame.appendChild(img_cat_hand);
        main_frame.appendChild(img_cat_body);

        setTimeout(()=>{img_cat_hand.style.bottom = '0'; img_cat_body.style.bottom = '0';}, 250)
    }
    if (scene == 'final') {

        let candys_img = document.createElement('img');
        candys_img.src = `images/other/candice.png`;
        candys_img.classList.add(`candice`);
        main_frame.appendChild(candys_img);

        let cat_img = document.createElement('img');
        cat_img.src = `images/cat/${scene}.png`;
        cat_img.classList.add(`cat_${scene}`);
        main_frame.appendChild(cat_img);

        candys_img.style.animationPlayState = 'running';
        cat_img.style.animationPlayState = 'running';

        cat_img.addEventListener('animationend', function (e) {
            if (e.animationName == 'cat_final') {
                create_buttons('final')
            }
        })
    }
}

function create_buttons(scene) {
    if (scene == 'final') {
        let play_button = document.createElement('img');
        play_button.src = `images/other/play_now.png`;
        play_button.classList.add(`button_play_now`);
        main_frame.appendChild(play_button);
        setTimeout(() => {
            play_button.style.animationPlayState = 'running';
        }, 500);
        if (screen.width < 500) {
            play_button.style.width = screen.width*.9 + 'px'
        }
        play_button.addEventListener('animationend', function (e) {
            if (e.animationName === 'button_play_now') {
                setTimeout(() => {
                    play_button.style.bottom = getComputedStyle(play_button).bottom;
                    play_button.style.animation = "button_play_now_wait .8s linear infinite running";
                }, 500);
                setTimeout(() => {
                    let restart_button = document.createElement('img');
                    restart_button.src = `images/other/restart.png`;
                    restart_button.classList.add(`button_restart`);
                    restart_button.setAttribute('draggable', false);
                    main_frame.appendChild(restart_button);
                    delay(500).then(() => {
                        if (screen.height > screen.width) {
                            restart_button.style.right = (screen.height - screen.width)/2 + 'px';
                        }
                        else {
                            restart_button.style.right = screen.height/10 + 'px';
                        }
                        restart_button.addEventListener("click", function() {
                            main_frame.style.opacity = '';
                            let imgs = document.querySelectorAll('img');
                            document.querySelector('div.copyrights').remove();
                            setTimeout(()=>{
                                for (let i = 0; i < imgs.length; i++) {
                                    imgs[i].remove();
                                }
                                create_main_scene('main')},250);
                        }, false);
                    });
                }, 500);
            }
        })
        drag_drop();
    }
}

function create_main_scene(name) {
    if (name == 'main') main_frame.style.opacity = '1';
    create_bg(name);
    create_table(name);
    create_logo(name);
    create_table_objects(name);
    eatable_objects.sort(makeRandomArr);
    create_eatable_objects(name);
    dish_click();
    create_character(name);
    setSize(name);
    set_position_for_all_objects(name);
    create_copyrights(name);
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

    rays_img.style.animationPlayState = 'running';
    img.style.animationPlayState = 'running';

    img.addEventListener('animationend', function (e) {
        if (e.animationName === 'scene_result') {
            setTimeout(() => { create_main_scene('final') }, 500);
        }
    })
    drag_drop();
}

function dish_click(){
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
                if (dish[i].style.left.slice(0, -2) > screen.height/2) {
                    dish[i].style.transform = 'translateX' + `( ${translateX * -1 + 8}% ) ` + 'translateY' + `( ${translateY + 50}% ) ` + styles[2] + ' ' + 'rotate(27deg)';
                }
                if (dish[i].style.left.slice(0, -2) <= screen.height/2) {
                    dish[i].style.transform = 'translateX' + `( ${translateX *-1 - 8}% ) ` + 'translateY' + `( ${translateY + 50}% ) ` + styles[2] + ' ' + 'rotate(-27deg)';
                }
            }
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
}

function drag_drop() {
    let imgs = document.querySelectorAll('img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('draggable', false);
    }
}

window.addEventListener('resize', setSize, true);

function setSize(scene) {
    if (scene == 'main') {
        if (screen.orientation.type === 'landscape-primary') {
            main_frame.style.height = window.innerHeight + 'px';
            main_frame.style.width = window.innerHeight + 'px';
        }
        if (screen.orientation.type === 'portrait-primary') {
            if (window.outerHeight > 960) {
                main_frame.style.height = window.outerHeight + 'px';
                main_frame.style.width = window.outerHeight + 'px';
                main_frame.style.transform = `translateX(${((window.outerHeight - window.outerWidth) / 2 * -1) + 'px'})`;
            }
            if (window.outerHeight <= 960) {
                main_frame.style.height = window.outerHeight + 'px';
                main_frame.style.width = main_frame.style.height;
                main_frame.style.transform = `translateX(${(main_frame.clientHeight - window.outerWidth) / 2 * -1 + 'px'}) scaleX(1)`;
            }
        }
    }

}

function set_position_for_all_objects(scene) {
    if (scene == 'main') {
        let images = document.querySelectorAll('img');
        for (let i = 0; i < images.length; i++) {
            if (screen.height / screen.width > 1.5) {
                let cof = Math.sqrt((screen.height / 1.5) / screen.width) / 10;
                cof = cof + (cof / 10);
                let current_left = getComputedStyle(images[i]).left;
                images[i].style.left = current_left;
                if ((current_left.includes('px')) && (current_left.slice(0, -2) != screen.height / 2) && (current_left.slice(0, -2) != 0)) {
                    if (current_left.slice(0, -2) < screen.height / 2) {
                        images[i].style.left = images[i].style.left.slice(0, -2) * 1 + screen.width * cof + 'px';
                    }
                    if (current_left.slice(0, -2) > screen.height / 3) {
                        images[i].style.left = images[i].style.left.slice(0, -2) * 1 - screen.width * cof + 'px';
                    }
                }
                if (images[i].classList.contains('logo') || images[i].classList.contains('main_bg') ) {
        
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
            else {
                images[i].style.transform = '';
            }
        }
    }
}

drag_drop();
