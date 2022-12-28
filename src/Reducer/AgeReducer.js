export const AgeReducer = (state, action) => {
  switch (action.type) {
    case "add_user":
      const val = {
        ...state,
        users: [...state.users, action.payload],

      }
      return val;
    case "invalid_age":
      return {
        ...state,
        errCode: 1,
      };
    case "reset_err":
      return {
        ...state,
        errCode: 0,
      };
    case "enter_all_value":
      return {
        ...state,
        errCode: 2,
      }
    case "delete_user":
      const users = state.users.filter((user, idx) => {
        if (idx !== action.payload) {
          return user;
        }

      })
      return {
        ...state,
        users: users,

      }



  }



}
