import { renderInstacheck } from "./components/widgets/Instacheck";
const _BRInstacheck = { init: renderInstacheck };

if (typeof window !== "undefined") {
	window.BRInstacheck = _BRInstacheck;

	if (process.env.NODE_ENV === "development") {
		window.BRInstacheck.init("#br-instacheck");
	}
} else {
	console.warn("Cannot initialize BRInstacheck");
}
