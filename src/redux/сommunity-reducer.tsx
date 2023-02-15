import {v1} from 'uuid';

export type CommunityPageNavigationType = {
  id: string
  item: string
  path: string
}
export type CommunityPageType = {
  navigation: Array<CommunityPageNavigationType>
}

type CommunityPageActionsType = {}

const initialState: CommunityPageType = {
  navigation: [
		{id: v1(), item: 'Форум', path: '/community/forum'},
    {id: v1(), item: 'Друзья', path: '/community/friends'},
		{id: v1(), item: 'Поддержка', path: '/community/support'},
  ]
}

export const communityReducer = (state: CommunityPageType = initialState, action: CommunityPageActionsType) => {
  return state;
}
