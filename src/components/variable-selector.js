import { SelectControl } from '@wordpress/components';
import variables from '../variables.json';
import { useState } from '@wordpress/element';

const initialSelectValues = variables.reduce((acc, variable) => {
	acc[variable.key] = variable.options[0].value;
	return acc;
}, {});

export default function VariableSelector() {
    const [selectValues, setSelectValues] = useState(initialSelectValues);
	const selects = variables.map((variable) => (
		<SelectControl
			label={variable.label}
			value={selectValues[variable.key]}
			options={variable.options}
			onChange={(value) => setSelectValues({ ...selectValues, [variable.key]: value })}
		/>
	));
	return <div className="variable-selector">{selects}</div>;
}
