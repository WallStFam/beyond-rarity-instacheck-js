import { render, h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import styles from "../../style/instacheck.module.css";
import InfoButton from "./buttons/InfoButton";
import GoBeyondRarity from "./icons/GoBeyondRarity";
import InfoModal from "./InfoModal";
import SubmitButton from "./buttons/SubmitButton";
import ErrorMessage from "./ErrorMessage";
import { isInteger } from "../../lib";

function Instacheck({ collectionId, theme, startTokenId, endTokenId }) {
	const input = useRef();
	const [isModalOpen, setIsModalOpen] = useState();
	const [isValid, setIsValid] = useState(true);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

	useEffect(() => {
		// prevents focus on mount
		if (isModalOpen === undefined) return;
		if (!isModalOpen) input.current?.focus();
	}, [isModalOpen]);

	const isValueOutOfRange = (value) => {
		const intValue = Number(parseInt(value, 10));
		return intValue < startTokenId || intValue > endTokenId;
	};

	const validateInput = (value) => {
		const inputHasError = value !== "" && (!isInteger(value) || isValueOutOfRange(value));

		if (inputHasError) {
			if (isValid) setIsValid(false);
			if (isSubmitEnabled) setIsSubmitEnabled(false);
		} else {
			if (!isValid) setIsValid(true);
			if (value !== "") {
				setIsSubmitEnabled(true);
			} else {
				setIsSubmitEnabled(false);
			}
		}
	};

	const onInputChange = (e) => {
		const { value } = e.target;
		validateInput(value);
	};

	// clears the input on ESC key, submits on ENTER key
	const onInputKeyDown = (e) => {
		if (e.keyCode === 13) onSubmit(e.target.value);
		if (e.keyCode === 27) input.current.value = "";
	};

	// sumbit button handler
	const onSubmitClick = () => {
		const { value } = input.current;
		if (isInteger(value)) onSubmit(value);
	};

	const onSubmit = (tokenId) => {
		window.open(`https://instacheck.beyondrarity.com/c/${collectionId}/${tokenId}`);
		input.value = "";
	};

	const toggleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const themeClass = theme === "dark" ? "dark" : "light";

	return (
		<div class={`${styles.container} ${styles[themeClass]}`}>
			<h3 class={styles.title}>Check Your NFT Rankings:</h3>
			<div class={styles.inputContainer}>
				<input
					ref={input}
					type="phone"
					placeholder="# Token"
					class={styles.input}
					onChange={onInputChange}
					onKeyDown={onInputKeyDown}
				/>
				<SubmitButton onClick={onSubmitClick} enabled={isSubmitEnabled} />
				<GoBeyondRarity theme={theme} />
			</div>
			<InfoButton onClick={toggleModalOpen} isOpen={isModalOpen} />
			<InfoModal theme={theme} isOpen={isModalOpen} />
			<ErrorMessage
				message={`Should be between ${startTokenId} - ${endTokenId}`}
				visible={!isValid}
			/>
		</div>
	);
}

// Render function for WidgetA
export function renderInstacheck(el, props) {
	const errorMsg =
		"BRInstacheck needs a '%param%' value. Set it on the html element as an attribute or in a config object when calling BRInstacheck.init";

	const renderElm = el instanceof HTMLElement ? el : document.querySelector(el);

	const finalProps = {
		collectionId: renderElm.getAttribute("collectionId") || props?.collectionId,
		startTokenId: renderElm.getAttribute("startTokenId") || props?.startTokenId,
		endTokenId: renderElm.getAttribute("endTokenId") || props?.endTokenId,
		theme: renderElm.getAttribute("theme") || props?.theme || "light",
	};

	const errors = [];
	if (!finalProps.collectionId) errors.push(errorMsg.replace("%param%", "collectionId"));
	if (!finalProps.startTokenId) errors.push(errorMsg.replace("%param%", "startTokenId"));
	if (!finalProps.endTokenId) errors.push(errorMsg.replace("%param%", "endTokenId"));

	if (errors.length > 0) {
		errors.forEach((err) => {
			console.error(err);
		});
		return;
	}
	render(h(Instacheck, finalProps), renderElm);
}

export default Instacheck;
