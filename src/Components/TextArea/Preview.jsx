import { Button, Grid } from '@mui/material';
import React from 'react';
import styles from '../../stylesheets/textArea.module.css';

const Preview = ({ mode, text, dynText }) => {
	const handleCopy = () => {
		let newTxt = document.getElementById('mybox');
		newTxt.select();
		navigator.clipboard.writeText(newTxt.value);
		document.getSelection().removeAllRanges();
	};

	return (
		<Grid
			container
			xs={12}
			className={styles.previewContainer}
			style={{
				backgroundColor: mode === 'light' ? '#318CE7' : '#009BB6',
			}}
		>
			<div className={styles.previewTitle}>
				<span>Preview</span>
				<Button
					style={{
						background: mode === 'light' ? '#F3583A' : '#E69B5B',
					}}
					variant='contained'
					className={styles.buttonSecondary}
					onClick={handleCopy}
				>
					Copy Text
				</Button>
			</div>

			<Grid item xs={12}>
				<textarea
					className={styles.previewText}
					style={{
						backgroundColor: mode === 'light' ? 'white' : '#2E2C40',
						color: mode === 'light' ? 'black' : '#fff',
						padding: '1rem',
					}}
					rows='13'
					value={dynText}
					id='mybox'
					readOnly
				>
					<p>{text}</p>
				</textarea>
			</Grid>
		</Grid>
	);
};

export default Preview;
