import s from './Investing.module.css';
import React from "react";
import {ActionsType} from '../../../index';
import {InvestingPageType} from "../../../redux/investing-reducer";
import styles from '../../../App.module.css';

type PropsType = {
	page: InvestingPageType
	dispatch: (action: ActionsType) => void
}

const Investing = (props: PropsType) => {
	return (
		<section className={`${styles.page} ${styles.container} ${s.investing}`}>
			{props.page.text}
		</section>
	)
}
export default Investing;
