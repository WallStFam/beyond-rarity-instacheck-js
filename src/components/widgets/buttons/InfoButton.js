import InfoIcon from "../icons/InfoIcon";
import styles from "../../../style/instacheck.module.css";

const InfoButton = ({ onClick, isOpen }) => {
	return (
		<div class={styles.infoBtn} onClick={onClick}>
			<div class={`${styles.infoIcon} ${isOpen ? styles.open : ""}`}>
				<InfoIcon width="16" height="16" />
			</div>
			<div class={`${styles.closeDash} ${styles.left} ${isOpen ? styles.open : ""}`} />
			<div class={`${styles.closeDash} ${styles.right} ${isOpen ? styles.open : ""}`} />
		</div>
	);
};

export default InfoButton;
