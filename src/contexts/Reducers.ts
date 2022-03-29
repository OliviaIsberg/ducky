// import { initialState } from './ProductsInCartContext'

import { Product } from '../Api/Data';
import { ProductType } from './ProductsContext';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
//Cart

export enum Types {
  AddToCart = 'ADD_TO_CART',
  DeleteFromCart = 'REMOVE_FROM_CART',
  UpdateQty = 'CHANGE_PROD_QTY',
  ResetCart = 'RESET_CART',
}

export type CartType = {
  id: number;
  title: string;
  description: string;
  price: number;
  qty: number;
  imgURL: string;
};

type CartPayload = {
  [Types.AddToCart]: {
    id: number;
    title: string;
    description: string;
    price: number;
    qty: number;
    imgURL: string;
  };

  [Types.DeleteFromCart]: {
    id: number;
  };
  [Types.UpdateQty]: {
    id: number;
    qty: number;
  };
  [Types.ResetCart]: {};
};

export const initialState = [] as CartType[];
export type State = typeof initialState;

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

export const cartReducer = (state: State, action: CartActions) => {
  switch (action.type) {
    case Types.AddToCart:
      return [...state, { ...action.payload, qty: 1 }];
    case Types.DeleteFromCart:
      return state.filter((c: { id: number }) => c.id !== action.payload.id);
    case Types.UpdateQty:
      return [
        ...state.filter((cartItem: CartType) => {
          return cartItem.id === action.payload.id
            ? (cartItem.qty = action.payload.qty)
            : cartItem.qty;
        }),
      ];
    case Types.ResetCart:
      return (state = initialState);
    default:
      throw new Error('error');
  }
};

// Products

export enum ProductTypes {
  Create = 'CREATE_PRODUCT',
  Read = 'READ_PRODUCT',
  Update = 'UPDATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
}

type ProductPayload = {
  [ProductTypes.Create]: {
    product: Product;
  };
  [ProductTypes.Read]: {
    id: number;
  };
  [ProductTypes.Update]: {
    product: Product;
  };
  [ProductTypes.Delete]: {
    id: number;
  };
};

const initialStateProd = [] as ProductType[];
export type Data = typeof initialStateProd;

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: Data, action: ProductActions) => {
  switch (action.type) {
    case ProductTypes.Create:
      const productsAfterCreate = [...state];
      productsAfterCreate.push(action.payload.product);
      return productsAfterCreate;
    case ProductTypes.Read:
      return state;
    case ProductTypes.Update:
      const products = [...state];
      let productIndex = products.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (productIndex !== -1) {
        products[productIndex] = action.payload.product;
      }

      return products;
    case ProductTypes.Delete:
      const productsAfterDeletion = state.filter(
        (product) => product.id !== action.payload.id
      );

      return productsAfterDeletion;
    default:
      return state;
  }
};

export enum ProductEditReducerType {
  Update,
  UpdateTitle,
  UpdateInformation,
  UpdateImgURL,
  UpdatePrice,
  UpdateCategory,
  Reset,
  Delete,
}

export type ProductEditAction =
  | { type: ProductEditReducerType.Update; product: Product }
  | { type: ProductEditReducerType.UpdateTitle; value: string }
  | { type: ProductEditReducerType.UpdateInformation; value: string }
  | { type: ProductEditReducerType.UpdateImgURL; value: string }
  | { type: ProductEditReducerType.UpdatePrice; value: number }
  | { type: ProductEditReducerType.UpdateCategory; category: string }
  | { type: ProductEditReducerType.Reset; product: Product };

export function ProductEditReducer(state: Product, action: ProductEditAction) {
  switch (action.type) {
    case ProductEditReducerType.Update:
      return { ...action.product, edited: false };
    case ProductEditReducerType.UpdateTitle:
      return { ...state, title: action.value };
    case ProductEditReducerType.UpdateInformation:
      return { ...state, information: action.value };
    case ProductEditReducerType.UpdateImgURL:
      return { ...state, imgURL: action.value };
    case ProductEditReducerType.UpdatePrice:
      return { ...state, price: action.value };
    case ProductEditReducerType.UpdateCategory:
      return { ...state, category: action.category };
    case ProductEditReducerType.Reset:
      return { ...action.product, edited: false };
  }
}
