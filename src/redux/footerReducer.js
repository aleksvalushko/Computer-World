import check from "../icons/checkBox.svg";
import like from "../icons/like.svg";
import shield from "../icons/shield.svg";
import smile from "../icons/smile.svg";

let initState = {
    footer: {
        information: ['Главная', 'О магазине', 'Корзина', 'Обратная связь', 'Оплата и доставка', 'Новости', 'Карта сайта'],
        catalog: ['Ноутбуки', 'ПК', 'Комплектующие', 'Телефоны'],
        footerIcons: [check, like, shield, smile],
        operationMode: ['Режим работы: Вторник-Воскресенье с 9:00 до 14:00, Понедельник - Выходной',
            'Свидетельство №       УНП        ',
            'Дата регистрации в товарном реестре РБ: ']
    }
};

const footerReducer = (state = initState) => {
  return state;
};

export default footerReducer;