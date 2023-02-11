export type NewsPageType = {
  name: string
  data: string
  title: string
  text: string
  photo: string
  alt: string
  likesCount: number
}
export type NewsPageActionType = {}

const initialState = {
    name: 'Станислав Василевич',
    data: '12.08.2021',
    title: 'Поездка в Геленджик',
    text: 'Едем в Геленджик, ранний подъем, поезд, прибытие, съем жилья, экскурсия по набережной и по местным достопримечательностям',
    photo: 'https://funart.pro/uploads/posts/2021-03/1617192695_3-p-oboi-abkhaziya-gelendzhik-3.jpg',
    alt: 'Геленджик',
    likesCount: 4,
};

const newsReducer = (state: NewsPageType = initialState, action: NewsPageActionType) => {
  return state;
}

export default newsReducer;
