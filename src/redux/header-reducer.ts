import {v1} from 'uuid';
import {CommunityPageNavigationType} from "./сommunity-reducer";

export type UserType = {
  name: string
  avatar: string
}
export type HeaderType = {
  menu: Array<CommunityPageNavigationType>
  user: UserType
}
export type HeaderPageActionType = {}

const initialState = {
  menu: [
    {id: v1(), item: 'Главная', path: '/'},
    {id: v1(), item: 'Новости', path: '/news'},
    {id: v1(), item: 'Мотивация', path: '/motivation'},
		{id: v1(), item: 'Спорт', path: '/sport'},
		{id: v1(), item: 'Код', path: '/code'},
    {id: v1(), item: 'Инвестирование', path: '/investing'},
    {id: v1(), item: 'Сообщество', path: '/community'},
		{id: v1(), item: 'Автор', path: '/author'},
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
