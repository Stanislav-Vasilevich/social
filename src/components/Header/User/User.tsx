import React from 'react';
import s from './User.module.css';

type PropsType = {
	name: string
	avatar: string
}

const User = (props: PropsType) => {
	return (
		<div className={s.user}>
			<img className={s.avatar}
					 src={props.avatar}
					 alt=""
			/>
			{props.name}
		</div>
	);
};

export default User;
