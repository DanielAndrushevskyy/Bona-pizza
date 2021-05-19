const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0,
};

const cart = (state = initialState, action) => {
   switch (action.type) { 
      case 'ADD_PIZZA_CART': {
         const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id] 
               ? [action.payload]
               : [...state.items[action.payload.id], action.payload],
         };
         // вносимо в обєкт нову піцу
         const allPizzas = [].concat.apply([], Object.values(newItems));
         // получаємо масив усіх піц
         const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);
         // взнаєм кінцеву ціну
         return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice,
         }; 
      }
// в результаті получив масив усіх своїх добавлених обєктів і дізнався скільки всього їх

      default:
         return state;
   }
};

export default cart;