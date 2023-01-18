import s from './Investing.module.css';
import React from "react";
import {ActionsType} from '../../../../index';
import {InvestingPageType} from "../../../../redux/investing-reducer";

type PropsType = {
	page: InvestingPageType
	dispatch: (action: ActionsType) => void
}

const Investing = (props: PropsType) => {
	return (
		<div className={s.news}>
			{props.page}
		</div>
	)
}
export default Investing;
