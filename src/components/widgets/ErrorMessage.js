import styles from "../../style/instacheck.module.css";

const ErrorMessage = ({ message, visible }) => {
	const className = `${styles.errorMsg} ${visible ? styles.visible : ""}`;

	return <div class={className}>{message}</div>;
};

export default ErrorMessage;
