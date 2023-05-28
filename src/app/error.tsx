"use client";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<div>
			<h2>OOPS! An error occurred</h2>
			<button onClick={reset}>Try Again</button>
		</div>
	);
};

export default error;
