export type GroupNavigationType = {
  id: string
  item: string
  path: string
}

type StateType = {
  navigation: Array<GroupNavigationType>
}

export type GroupsPageActionType = {}

const groupsRedux = (state: StateType, action: GroupsPageActionType) => {
  return state;
}

export default groupsRedux;
