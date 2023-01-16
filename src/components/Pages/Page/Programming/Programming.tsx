import React from 'react';
import {NewsPageType} from "../../../../redux/news-reducer";
import {ActionsType} from "../../../../index";

type PropsType = {
	page: NewsPageType
	dispatch: (action: ActionsType) => void
}

const Programming = (props: PropsType) => {
	return (
		<div>

		</div>
	);
};

export default Programming;
