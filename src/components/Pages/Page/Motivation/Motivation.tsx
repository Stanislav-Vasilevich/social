import React from 'react';
import {ActionsType} from "../../../../index";
import {MotivationPageType} from "../../../../redux/motivation-reducer";
import styles from "../../../../App.module.css";
import s from "../Publications/Publications.module.css";

type PropsType = {
	page: MotivationPageType
	dispatch: (action: ActionsType) => void
}

const Motivation = (props: PropsType) => {
	return (
		<section className={`${styles.page} ${s.motivation}`}>
			{props.page.text}
		</section>
	);
};

export default Motivation;
