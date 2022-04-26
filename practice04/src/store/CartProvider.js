import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // Add
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; //

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existCartItem) {
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "DELETE") {
    //일단 눌린 아이템이 뭔지를 알아야하니까 배열 속 인덱스를 찾아준다.
    //액션으로 들어온 아이디와 같은 아이디를 갖고있는 아이템의 인덱스를 반환한다.
    //인덱스를 찾아냈으니 해당 아이템을 찾아낸다.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    //리무브가 호출되면 전체 값에서 눌린 아이템의 가격도 빼준다.
    const newTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    //만약 장바구니의 해당 아이템 갯수가 1개면 삭제 클릭한 애 빼고 나머지만 파생상태로 리턴한다.
    // 장바구니의 아이템 갯수가 1개 이상이면, 나머지 속성은 그대로 두는데, amount 만 하나를 빼준다.
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      }; // 불변성을 지키기 위한 바락 1

      updatedItems = [...state.items]; // 불변성을 지키기 위한 바락 2
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const deleteItemCartHandler = (id) => {
    dispatchCartAction({ type: "DELETE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    deleteItem: deleteItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
