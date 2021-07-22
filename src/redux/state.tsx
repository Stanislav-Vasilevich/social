export type FriendDataType = {
  id: number
  name: string
  img: string
}

type DialogsDataType = {
  id: number
  message: string
}

type FriendsPageType = {
  friends: Array<FriendDataType>
  dialogs: Array<DialogsDataType>
}

export type GlobalStateType = {
  friendsPage: FriendsPageType
}

export const globalState: GlobalStateType = {
  friendsPage: {
    friends: [
      {id: 1, name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
      {id: 2, name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
      {id: 3, name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
    ],
    dialogs: [
      {id: 1, message: 'Hello! How are you?'},
      {id: 2, message: 'Hey! I`m work, I`m find!'},
      {id: 3, message: 'It`s good))'}
    ]
  }
}
