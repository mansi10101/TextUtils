import { Grid } from '@mui/material';
import React from 'react';
import styles from '../../stylesheets/textArea.module.css';

const TextWidget = ({ mode, text, setText, dynText }) => {
	const handleOnChange = (event) => {
		//console.log("On change");
		setText(event.target.value);
		// setText2(event.target.value);
	};
	const handleCopy = () => {
		let newTxt = document.getElementById('mybox');
		newTxt.select();
		navigator.clipboard.writeText(newTxt.value);
		document.getSelection().removeAllRanges();
	};
	return (
		<Grid container xs={12} className={styles.widgetContainer}>
			<Grid
				container
				xs={12}
				className={styles.widgetBox}
				style={{
					backgroundColor: mode === 'light' ? '#318CE7' : '#009BB6',
				}}
			>
				<Grid container xs={12}>
					<h2>Enter the text to analyze below</h2>
				</Grid>
				<Grid container xs={12}>
					<textarea
						onChange={handleOnChange}
						rows='13'
						value={text}
						id='myarea'
						style={{
							width: '100%',
							backgroundColor: mode === 'light' ? 'white' : '#2E2C40',
							color: mode === 'light' ? 'black' : '#fff',
							padding: '1rem',
						}}
					/>
				</Grid>
			</Grid>

			<div
				style={{
					color: mode !== 'light' ? '#fff' : '#2E2C40',
					textAlign: 'right',
				}}
			>
				<p>
					{' '}
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{' '}
					Words | {text.length} Characters |{' '}
					{text === ''
						? text
								.trim()
								.split('.')
								.filter((text) => text !== '').length
						: text.split('.').length - 1}{' '}
					Sentences |{' '}
					{0.008 *
						text.split(' ').filter((element) => {
							return element.length !== 0;
						}).length}{' '}
					Minutes Read
				</p>
			</div>
		</Grid>
	);
};

export default TextWidget;
