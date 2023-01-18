import React from 'react';
import {ActionsType} from "../../../../index";
import {MotivationPageType} from "../../../../redux/motivation-reducer";

type PropsType = {
	page: MotivationPageType
	dispatch: (action: ActionsType) => void
}

const Motivation = (props: PropsType) => {
	return (
		<div>
			{props.page.text}
		</div>
	);
};

export default Motivation;
