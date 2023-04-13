import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increase: (state, action) => {
      console.log(">> increase fonksiyonu çağrıldı", state, action);
      state.counter += 1;
    },
    decrease: (state, action) => {
      console.log(">> decrease fonksiyonu çağrıldı", state, action);
      state.counter -= 1;
    },
    setCounter: (state, action) => {
      console.log(">> setCounter fonksiyonu çağrıldı", state, action);
      state.counter = action.payload;
    },
  },
});

export const { decrease, increase, setCounter } = counterSlice.actions;
//diğer companentler tarafından dispatch yapılabilsinler diye reducer fonk oluşturuyoruz aynı isimde
export default counterSlice.reducer;
// reducerlar default olarak export edilerek store tarafından kullanımı sağlanır
