import {v1} from "uuid";
import {useState} from "react";

export type FriendDataType = {
  id: string
  name: string
  img: string
}

type DialogsDataType = {
  id: string
  message: string
}

type FriendsPageType = {
  friends: Array<FriendDataType>
  dialogs: Array<DialogsDataType>
}

export type GlobalStateType = {
  friendsPage: FriendsPageType
}

export const state: GlobalStateType = {
  friendsPage: {
    friends: [
      {id: v1(), name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
      {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
      {id: v1(), name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
    ],
    dialogs: [
      {id: v1(), message: 'Hello! How are you?'},
      {id: v1(), message: 'Hey! I`m work, I`m find!'},
      {id: v1(), message: 'It`s good))'}
    ]
  }
}

// const [dialogs, setDialogs] = useState(globalState);

export const addMessage = (massage: string) => {
  const newMessage = {id: v1(), message: massage};

  console.log(state.friendsPage.dialogs);

  state.friendsPage.dialogs.push(newMessage);

  render(state);
}
