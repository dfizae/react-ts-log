interface UserState {
  name?: string;
  email?: string;
}

// 타입의 메시지 마다 객체의 타입들을 담아놓기
// payload의 타입이 객체 타입이면 인터페이스에 따로 담아놔서 코드가 길어지는걸 방지, 관심사 분리
type UserAction =
  | { type: "SET_USER"; payload: UserState }
  | { type: "CLEAR_USER" };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      // 초깃값이 배열, 객체 형태면 ...형식으로 불러온다. ...state: state의 초깃값을 불러온다. {}, [] 는 참조형 데이터이기에 이전 상태를 무조건 복사해줘야 한다.
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};