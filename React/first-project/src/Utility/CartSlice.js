import { createSlice } from "@reduxjs/toolkit";
let cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    ids : []
  },
  reducers: {
    addCart: (state, action) => {
      let obj = action.payload;
      let objId = obj.id;;

      let cartObj = {obj : obj , quantity : 1}

      let presentObj = state.items.find(ele=>ele.obj.id == objId ) 

      if(presentObj){
        presentObj.quantity = presentObj.quantity+1;
      }else{
        state.ids.push(objId)
        state.items.push(cartObj)
      }

    },
    removeCart: (state, action) => {
      let id = action.payload;
      state.items = state.items.filter((cartObj) => {
        return cartObj.obj.id != id;
      });

      state.ids = state.ids.filter((objid) => {
        return objid != id;
      });

      
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.ids.length = 0 ;
    },
    incQuantity : (state, action) => {
      let objId = action.payload;
      let presentObj = state.items.find(ele=>ele.obj.id == objId ) 
      presentObj.quantity = presentObj.quantity+1;

    },
    decQuantity : (state, action) => {
      let objId = action.payload;
      let presentObj = state.items.find(ele=>ele.obj.id == objId ) 
      presentObj.quantity = presentObj.quantity-1;

      if(presentObj.quantity == 0){
        state.items = state.items.filter((cartObj)=> cartObj.obj.id != objId)
        state.ids = state.ids.filter((id)=> id != objId)  
      }
    }
  },
});

export const { addCart, removeCart, clearCart , decQuantity , incQuantity} = cart.actions;

export default cart.reducer;
