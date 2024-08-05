// import { createStore } from "https://cdn.skypack.dev/redux";

// ///////////////////////// MY Redux //////////////////////////////////

// function createStore(reducer) {
//   let state = reducer(undefined, {});

//   let st = [];

//   return {
//     getState() {
//       return state;
//     },
//     dispatch(action) {
//       state = reducer(state, action);

//       st.forEach((i) => i());
//     },
//     subscribe(item) {
//       st.push(item);
//     },
//   };
// }

// //////////////////////// MY APP ///////////////////////////////////
// const defaultState = 0;

// function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case "DEPOSIT":
//       return state + action.payload;
//     case "WITHDRAW":
//       return state - action.payload;
//     default:
//       return state;
//   }
// }

// function ActiondepositAmount(amount) {
//   return {
//     type: "DEPOSIT",
//     payload: amount,
//   };
// }

// function ActionwithdrawAmount(amount) {
//   return {
//     type: "WITHDRAW",
//     payload: amount,
//   };
// }

// const state = createStore(reducer);

// console.log(state);

// const actiondeposit = document.querySelector("#deposit");

// actiondeposit.onclick = () => {
//   state.dispatch(ActiondepositAmount(10));
// };

// const actionwithdraw = document.querySelector("#withdraw");

// actionwithdraw.onclick = () => {
//   state.dispatch(ActionwithdrawAmount(10));
// };

// state.subscribe(() => {
//   render();
// });

// function render() {
//   const result = document.querySelector("#quantity");

//   result.innerText = state.getState();
// }

// render();

function createStore(re) {
  let state = re(undefined, {});

  const t = [];
  return {
    getState() {
      console.log("Get state" + state);
      return state;
    },
    dispatch(action) {
      state = re(state, action);
      t.forEach((a) => a());
    },
    subscribe(fuc) {
      t.push(fuc);
    },
  };
}

const init = 0;

const reducer = (state = init, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

const actionIncrease = (data) => {
  return {
    type: "INCREASE",
    payload: data,
  };
};

const actionDecrease = (data) => {
  return {
    type: "DECREASE",
    payload: data,
  };
};

const b_in = document.querySelector("#deposit");

b_in.onclick = () => {
  store.dispatch(actionIncrease(10));
};

const b_out = document.querySelector("#withdraw");

b_out.onclick = () => {
  store.dispatch(actionDecrease(10));
};

store.subscribe(() => {
  render();
});

function render() {
  const f = document.querySelector("#quantity");
  f.innerText = store.getState();
}

render();
