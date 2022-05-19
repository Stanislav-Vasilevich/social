const CHANGE_DESCRIPTION = 'CHANGE-DESCRIPTION';

export type AuthorPageType = {
  background: string
  altBackground: string
  avatar: string
  name: string
  description: string
}
type StateType = {
  background: string
  altBackground: string
  avatar: string
  name: string
  description: string
}
export type AuthorPageActionsType = ReturnType<typeof changeDescriptionAC>

const initialState: StateType = {
  background: 'https://www.sgmbg.ru/upload/resize_cache/iblock/e71/1450_750_2/e71bd49ed67671a260e4748d6793e299.jpg',
  altBackground: 'Сочи',
  avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg',
  name: 'Станислав Василевич',
  description: 'Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React',
}

const authorReducer = (state: AuthorPageType = initialState, action: AuthorPageActionsType) => {
  if(action.type === CHANGE_DESCRIPTION) {

  }

  return state;
}

export const changeDescriptionAC = (text: string) => {
  return {
    type: CHANGE_DESCRIPTION,
    newText: text
  }
}

export default authorReducer;
