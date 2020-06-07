import slider1 from "../img/repairSlider.jpg";
import slider2 from "../img/readySlider.jpg";
import slider3 from "../img/readySlider2.jpg";
import aside1 from "../img/aside1.jpg";
import aside2 from "../img/aside2.jpg";

let initState = {
    navigation: {
        menu: [{
            name: 'Ноутбуки',
            items: ['Lenovo', 'Samsung', 'Acer', 'ASUS'],
        },
            {
                name: 'ПК',
                items: ['1000$', '1500$', '2000$']
            },
            {
                name: 'Комплектующие',
                items: ['Внешние HDD', 'Внутренние HDD/SDD', 'Процессоры', 'Видеокарты', 'Оперативная память',
                    'Корпуса', 'Блоки питания']
            },
            {
                name: 'Телефоны',
                items: ['Apple', 'Samsung', 'Lenovo']
            }],
        slides: [
            {
                text: 'Hello, One!',
                image: slider1
            },
            {
                text: 'Hello, Two!',
                image: slider2
            },
            {
                text: 'Hello, Three!',
                image: slider3
            }],
        asides: [
            {id:1, img: aside1},
            {id:2, img: aside2},
        ],
        index: 0
    }
};

const navigationReducer = (state = initState) => {
    return state;
};

export default navigationReducer;