import { TextareaControl, Button } from '@wordpress/components';
import variables from '../variables.json';

export default function PromptTextarea({ selectValues }) {
	const valuePairs = Object.entries(selectValues).map(([key, value]) => {
		const variable = variables.find((v) => v.key === key);
		const option = variable.options.find((o) => o.value === value);
		return `${variable.label}: ${option.label}`;
	});
	const label = `Die Antwort von ChatGPT für die Werte ${valuePairs.join(', ')}`;

	return (
		<div className="prompt-textarea">
			<TextareaControl
				className="textarea"
				label={label}
				help="Sie können die Antwort selbst anpassen"
				value={promptText}
				onChange={setPromptText}
			/>
		</div>
	);
}
