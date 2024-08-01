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

//       state.forEach((i) => i());
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

function createStore(reducer) {
  let state = reducer(undefined, {});

  let f = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);

      f.forEach((e) => e());
    },
    subscribe(funcs) {
      f.push(funcs);
    },
  };
}

const init = 0;

function reducer(state = init, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

const state = createStore(reducer);

// function actiondepositAmount(amount) {
//   return {
//     type: "DEPOSIT",
//     payload: amount,
//   };
// }

const actiondepositAmount = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

function actionwithdrawAmount(amount) {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
}

const actionDeposit = document.querySelector("#deposit");
actionDeposit.onclick = () => {
  state.dispatch(actiondepositAmount(10));
};

const actionWithdraw = document.querySelector("#withdraw");
actionWithdraw.onclick = () => {
  state.dispatch(actionwithdrawAmount(10));
};

state.subscribe(() => render());

function render() {
  const s = document.querySelector("#quantity");
  s.innerText = state.getState();
}

render();

function test() {
  return {
    name: "Ha",
    amount: 5,
  };
}

console.log(test);
