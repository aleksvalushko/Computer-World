import product1 from "../img/product1.jpeg";
import product2 from "../img/product2.jpeg";

const ADD_COMMENT = 'CW/PRODUCTS/ADD_COMMENT';
export const addComment = (name, comment) => (
    {type: ADD_COMMENT, name, comment}
);

let initState = {
    products: [
        {
            id: 1,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3000$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 2,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3001$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 3,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3002$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 4,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3003$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 5,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3004$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 6,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3005$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 7,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3006$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 8,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3007$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 9,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3008$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 10,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3009$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 11,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3010$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 12,
            imageMain: product2,
            image: product1,
            title: 'Apple MacBook Pro15',
            price: '3011$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        },
        {
            id: 13,
            imageMain: product1,
            image: product2,
            title: 'Apple MacBook Pro15',
            price: '3012$',
            text: 'Радиотелефон; Caller ID, АОН; тип звонка: полифония; экран\n' +
                '                            цветной; телефонный\n' +
                '                            справочник на 500 номеров; подсветка клавиатуры; автоответчик; время работы в режиме\n' +
                '                            разговора: 14 часов; время работы в режиме ожидания: 200 часов.',
            comments: []
        }
    ]
};

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 1,
                name: action.name,
                comment: action.comment
            };
            return {
                ...state,
                products: state.products.map(product => {
                    if(product.id === 1){
                        return {...product, comments: [newComment, ...product.comments]}
                    } else {
                        return product;
                    }

                })
            };
        default:
            return state;
    }
};

export default productsReducer;