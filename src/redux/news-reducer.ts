import {ActionsType, NewsPageType} from './store';

const initialState = {
  avatar: 'https://www.neizvestniy-geniy.ru/images/users/2020/04/148421.jpg',
    name: 'Алексей Етеревсков',
    data: '12.08.2021',
    title: 'Был в Крыму',
    text: 'Ездил в Крым, классно отдохнул, посмотрел на местные виды и сделал отличное фото!',
    photo: 'https://top10a.ru/wp-content/uploads/2020/01/lastochkino_gnezdo_swallow_nest2-1shyu.jpg',
    alt: 'Крым',
    likesCount: 4,
};

const newsReducer = (state: NewsPageType = initialState, action: ActionsType) => {
  return state;
}

export default newsReducer;
