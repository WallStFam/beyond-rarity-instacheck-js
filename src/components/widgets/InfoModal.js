import BeyondRarity from "./icons/BeyondRarity";
import styles from "../../style/instacheck.module.css";

const InfoModal = ({ theme, isOpen }) => {
	const modalClassName = `${styles.infoModal} ${styles[theme]} ${isOpen ? styles.open : ""}`;

	return (
		<div class={modalClassName}>
			<h3 class={styles.title}>
				Get your own Rarity Checker
				<br />
				for your project here:
			</h3>
			<a
				href="https://www.beyondrarity.com"
				target="_blank"
				rel="noreferrer"
				title="Beyond Rarity - https://www.beyondrarity.com"
				class={styles.brButton}
			>
				<BeyondRarity theme={theme} />
			</a>
		</div>
	);
};

export default InfoModal;
