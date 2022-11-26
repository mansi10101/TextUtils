import { Grid } from '@mui/material';
import { useState } from 'react';
import styles from '../../stylesheets/textArea.module.css';
import ButtonGroup from './ButtonGroup';
import Preview from './Preview';
import TextWidget from './TextWidget';

const TextAreaWrapper = ({ mode, showAlert}) => {
	const [text, setText] = useState('');
	const [dynText, setDynText] = useState('');
	const [saved, setSaved] = useState('');

	return (
		<Grid container xs={12} className={styles.container}>
			<Grid container item xs={12} className={styles.operation}>
				<Grid item xs={12} sm={7} className={styles.textWidget}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<TextWidget
							text={text}
							setText={setText}
							dynText={dynText}
							setDynText={setDynText}
							saved={saved}
							setSaved={setSaved}
							mode={mode}
						/>
						<Preview text={text} dynText={dynText} mode={mode} />
					</div>
				</Grid>
				<Grid item xs={12} sm={3} className={styles.buttonsGroup}>
					<ButtonGroup
						text={text}
						setText={setText}
						dynText={dynText}
						setDynText={setDynText}
						saved={saved}
						setSaved={setSaved}
						mode={mode}
						showAlert={showAlert}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default TextAreaWrapper;
