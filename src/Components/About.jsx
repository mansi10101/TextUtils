import { Grid } from '@mui/material';
import styles from '../stylesheets/about.module.css';

export default function About({ mode }) {
	return (
		<Grid container xs={12} className={styles.container}>
			<Grid
				container
				item
				xs={11}
				sm={8}
				className={styles.contentSection}
				style={{
					backgroundColor: mode === 'light' ? '#318CE7' : '#009BB6',
				}}
			>
				<h1 className={styles.contentTitle}>About Us</h1>

				<div
					className={styles.contentText}
					style={{
						backgroundColor: mode === 'light' ? 'white' : 'black',
					}}
				>
					<p
						style={{
							color: mode !== 'light' ? 'white' : 'black',
						}}
					>
						TextUtils is a word counter and character counter utility which can
						be used to manipulate your text in the way you want. You can remove
						extra spaces, copy the manipulated text, convert them to uppercase
						or lowercase, reverse your sentences, listen to your text as well as
						break the paragraphs into individual sentences.
					</p>
				</div>
			</Grid>
		</Grid>
	);
}
