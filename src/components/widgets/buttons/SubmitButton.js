import ArrowRight from "../icons/ArrowRight";
import styles from "../../../style/instacheck.module.css";

const SubmitButton = ({ enabled, onClick }) => {
	const btnClassName = `${styles.submitBtn} ${!enabled ? styles.disabled : ""}`;
	return (
		<button class={btnClassName} onClick={onClick}>
			<ArrowRight />
		</button>
	);
};

export default SubmitButton;
