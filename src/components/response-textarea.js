import { TextareaControl, Button } from '@wordpress/components';
import variables from '../variables.json';

function getKey(selectValues) {
	return Object.keys(selectValues)
		.sort()
		.map((key) => `${key}:${selectValues[key]}`)
		.join('|');
}

export default function ResponseTextarea({ selectValues, responseTexts, setResponseTexts }) {
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
				value={responseTexts[getKey(selectValues)] ?? ''}
				onChange={(text) => setResponseTexts({ ...responseTexts, [getKey(selectValues)]: text })}
			/>
		</div>
	);
}
