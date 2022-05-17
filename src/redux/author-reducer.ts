import {ActionsType, AuthorPageType} from './store';

const initialState = {
  background: 'https://www.sgmbg.ru/upload/resize_cache/iblock/e71/1450_750_2/e71bd49ed67671a260e4748d6793e299.jpg',
  altBackground: 'Сочи',
  avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg',
  name: 'Станислав Василевич',
  description: 'Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React',
}

const authorReducer = (state: AuthorPageType = initialState, action: ActionsType) => {
  return state;
}

export default authorReducer;
