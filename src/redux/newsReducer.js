import product1 from "../img/product1.jpeg";
import product2 from "../img/product2.jpeg";

let initState = {
    news: [
        {
            image: product1,
            descriptionTitle: 'Apple MacBook Pro15',
            description: 'Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15' +
                'Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15',
            date: 23.05
        },
        {
            image: product2,
            descriptionTitle: 'Apple MacBook Pro15',
            description: 'Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15',
            date: 24.05
        },
        {
            image: product1,
            descriptionTitle: 'Apple MacBook Pro15',
            description: 'Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15' +
                'Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15 Apple MacBook Pro15',
            date: 25.05
        }
    ]
};

const newsReducer = ( state = initState) => {
  return state;
};

export default newsReducer;