import {v1} from 'uuid';
import {FriendsNavigationType} from './friends-reducer';

export type UserType = {
  name: string
  avatar: string
}
export type HeaderType = {
  menu: Array<FriendsNavigationType>
  user: UserType
}
export type HeaderPageActionType = {}

const initialState = {
  menu: [
    {id: v1(), item: 'Автор', path: '/'},
    {id: v1(), item: 'Программирование', path: '/programming'},
    {id: v1(), item: 'Инвестирование', path: '/investing'},
    {id: v1(), item: 'Друзья', path: '/friends'},
    {id: v1(), item: 'Спорт', path: '/sport'},
  ],
  user: {
    name: 'Станислав',
    avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg'
  }
}

export const headerReducer = (state: HeaderType = initialState, action: HeaderPageActionType) => {
  return state;
}

export default headerReducer;
