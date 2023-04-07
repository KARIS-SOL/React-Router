// 초기 상태
const initState = {
  userID: '',
  userPW: '',
  isLogin: false,
};

// 액션 타입 설정
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}

// Reducer
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
        userPW: '',
        isLogin: false,
      };
    default:
      return state;
  }
}
