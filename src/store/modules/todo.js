const initState = {
  todoList: [
    {
      id: 0,
      text: '코딩 공부하기 !!',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!!',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리하기!',
      done: false,
    },
  ],
};

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// Reducer
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return console.log('DONE 호출');
    default:
      return state;
  }
}
