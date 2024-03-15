import JSConfetti from "js-confetti";

export const jsConfetti = (typeof window !== "undefined") ? new JSConfetti() : null;