import * as ActionTypes from "./constants";

let initialState = {
  isLoading: true,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.FETCH_PEDING:
      state.isLoading = true;
      return { ...state };
    case ActionTypes.FETCH_FAIL:
      state.isLoading = false;
      state.cart = null;
      return { ...state };

    case ActionTypes.FETCH_SUCCESS:
      state.isLoading = false;
      state.cart = [...payload];
      return { ...state };

    case ActionTypes.CHOSE_CART_ITEM: {
        const tempCart = [...state.cart];

        const lengthShop = tempCart.length;
        for(let i = 0; i < lengthShop; i++) {
            const lengthProduct = tempCart[i].listProduct.length;
            for(let j = 0; j < lengthProduct; j++) {
                const prod = tempCart[i].listProduct[j];
  
                if(prod._id === payload.cartItemId) {
                  tempCart[i].listProduct[j] = prod.isChose ? 
                  { ...prod, isChose: !prod.isChose } : 
                  { ...prod, isChose: true };
                }
            }
        }
  
        state.cart = [...tempCart];
        return { ...state };
    }

    case ActionTypes.UPDATE_ALL_CART_ITEM_IN_SHOP: {
        const tempCart = [...state.cart];
        const shopInfo = tempCart.find(shop => shop._id === payload.shopId);

        if(shopInfo) {
            const {listProduct} = shopInfo;
            let isChoseAll = listProduct.some(prod => !prod.isChose);
            
            const lengthProduct = listProduct.length;
            for(let i = 0; i < lengthProduct; i++) {  
                listProduct[i] = { ...listProduct[i], isChose: isChoseAll }
            }
            shopInfo.listProduct = listProduct;

            const lengthShop = tempCart.length;
            for(let i = 0; i < lengthShop; i++) {
                if(tempCart[i]._id === payload.shopId) {
                    tempCart[i] = shopInfo
                }
            }
        }
  
        state.cart = [...tempCart];
        return { ...state };
    }

    case ActionTypes.UPDATE_ALL_CART_ITEM: {
        const tempCart = [...state.cart];
        let isChoseAll = false;
        const lengthShop = tempCart.length;

        for(let i = 0; i < lengthShop; i++) {
            const isNotAllSelected = tempCart[i].listProduct.some(prod => !prod.isChose);
            if(isNotAllSelected) {
                isChoseAll = true;
                break;
            }
        }

        for(let i = 0; i < lengthShop; i++) {
            const lengthProduct = tempCart[i].listProduct.length;
            for(let j = 0; j < lengthProduct; j++) {
                const prod = tempCart[i].listProduct[j];
                tempCart[i].listProduct[j] = { ...prod, isChose: isChoseAll }
            }
        }
  
        state.cart = [...tempCart];
        return { ...state };
    }

    case ActionTypes.ATTACH_MESSAGE: {
      const tempCart = [...state.cart];
      const lengthShop = tempCart.length;
      const {shopId, message} = payload;

      for(let i = 0; i < lengthShop; i++) {
          if(tempCart[i]._id === shopId) {
            tempCart[i].message = message;
          }
      }

      state.cart = [...tempCart];
      return { ...state };
  }
      

    default:
      return { ...state };
  }
};

export default cartReducer;
