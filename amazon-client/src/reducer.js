import { db, auth } from "./firebase"

export const initialState = {
    basket: [],
    user: null
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                basket: action.ccc
            }
        case "ADD_TO_BASKET":
            var userRef = db.collection('users').doc(auth.currentUser.uid);
            var setWithMerge = userRef.set({
                basket: [...state.basket, action.item],
            }, { merge: true });
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            var userRef = db.collection('users').doc(auth.currentUser.uid);
            var setWithMerge = userRef.set({
                basket: newBasket,
            }, { merge: true });
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            var userRef = db.collection('users').doc(auth.currentUser.uid);
            var setWithMerge = userRef.set({
                basket: [],
            }, { merge: true });
            return {
                ...state,
                basket: []
            }

        default:
            return state;
    }
};

export default reducer;