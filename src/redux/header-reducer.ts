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
    {id: v1(), item: 'Новости', path: '/news'},
    {id: v1(), item: 'Друзья', path: '/friends'},
    {id: v1(), item: 'Группы', path: '/groups'},
  ],
  user: {
    name: 'Stanislav',
    avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'
  }
}

export const headerReducer = (state: HeaderType = initialState, action: HeaderPageActionType) => {
  return state;
}

export default headerReducer;
