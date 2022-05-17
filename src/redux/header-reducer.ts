import {v1} from 'uuid';
import {ActionsType, HeaderType} from './store';

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

export const headerReducer = (state: HeaderType = initialState, action: ActionsType) => {
  return state;
}

export default headerReducer;
