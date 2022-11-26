import { Button, Grid } from '@mui/material';
import styles from '../../stylesheets/textArea.module.css';

const ButtonGroup = ({
	text,
	setText,
	dynText,
	setDynText,
	saved,
	setSaved,
	mode,
	showAlert,
}) => {
	const handleUpClick = () => {
		//console.log("uppercsae button got clicked" + "-" + text);
		let newText = text.toUpperCase();
		setText(newText);
		setDynText(newText);
		showAlert("Converted to Uppercase","success")
	};

	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		setDynText(newText);
		showAlert("Converted to Lowercase","success")
	};
	const handleClearClick = () => {
		let newText = '';
		setText(newText);
		setDynText(newText);
		showAlert("Cleared!!","success")
	};
	const handleExtraSpaces = () => {
		let newText = text.replace(/\s+/g, ' ').trim();
		setText(newText);
		setDynText(newText);
		showAlert("Extra space has been removed","success")
	};
	const handleSentenceCaseClick = () => {
		let newText = text
			.split('. ')
			.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase() + '.')
			.join(' ');
		newText = newText.slice(0, newText.length - 1);
		setDynText(newText);
		showAlert("Converted to Sentence case","success")
	};

	// const [playing, setPlaying] = useState(false);
	// const toggle = () => {
	//   console.log("im working");
	//   setPlaying(!playing);
	//   if(window.speechSynthesis.speak()){
	//     //setPlaying(true);
	//     if(playing === "Play")
	//     {
	//       window.speechSynthesis.cancel();

	//     }
	// }
	// else{
	//   window.speechSynthesis.speak()
	//     setPlaying(false);
	// }
	//  }
	// const handleSpeak = () => {
	//     let msg = new SpeechSynthesisUtterance();
	//     msg.text = text;
	//     window.speechSynthesis.speak(msg);
	//     setPlaying(true);

	// }

	const onAlternatingCase = () => {
		let newtext = '';
		for (let index = 0; index < text.length; index++) {
			if (index % 2 === 0) {
				newtext += text[index].toLowerCase();
			} else {
				newtext += text[index].toUpperCase();
			}
		}
		setDynText(newtext);
		showAlert("Converted to Alternating case","success")
	};
	const handleReverse = () => {
		let newText = text.split(' ').reverse().join(' ');
		setText(newText);
		setDynText(newText);
		showAlert("Text has been reversed","success")
	};
	const handleSPerLineClick = () => {
		let newText = text.replaceAll('.', '\n');
		setText(newText);
		setDynText(newText);
		showAlert("Converted to Paragraph","success")
	};
	const handleOrgText = () => {
		setText(saved);
		showAlert("Original Text Restored!!","success")
	};
	const handleSave = () => {
		setSaved(text);
		showAlert("Text Saved!!","success")
	};
	return (
		<div className={styles.buttonContainer}>
			<span className={styles.buttonHeader}>--TRY NOW--</span>
			<Button
				variant='contained'
				style={{
					background: mode === 'light' ? '#318CE7' : '#009BB6',
					color: 'white',
				}}
				className={styles.buttons}
				onClick={handleOrgText}
			>
				My Original Text
			</Button>
			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleUpClick}
			>
				Convert to UpperCase
			</Button>
			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleLowClick}
			>
				Convert to LowerCase
			</Button>
			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleExtraSpaces}
			>
				Remove Extra Spaces
			</Button>
			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleReverse}
			>
				Reverse Sentence
			</Button>

			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',
					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleSPerLineClick}
			>
				Break Paragraph
			</Button>

			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={handleSentenceCaseClick}
			>
				Make Sentence Case
			</Button>
			<Button
				variant='contained'
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#318CE7'
							: '#009BB6',

					color: text.length === 0 ? '#A6A6A6' : 'white',
				}}
				className={styles.buttons}
				disabled={text.length === 0}
				onClick={onAlternatingCase}
			>
				Alternating Case
			</Button>
			<Button
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#F3583A'
							: '#E69B5B',
				}}
				variant='contained'
				className={styles.buttonSecondary}
				disabled={text.length === 0}
				onClick={handleClearClick}
			>
				Clear Text
			</Button>
			<Button
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#F3583A'
							: '#E69B5B',
				}}
				variant='contained'
				className={styles.buttonSecondary}
				disabled={text.length === 0}
				onClick={handleSave}
			>
				Save Text
			</Button>
			<Button
				style={{
					background:
						text.length === 0
							? '#E0E0E0'
							: mode === 'light'
							? '#1B5E20'
							: '#00b38b',
				}}
				color='success'
				variant='contained'
				className={styles.buttonSecondary}
				disabled={text.length === 0}
				onClick={() => setText(dynText)}
			>
				Apply
			</Button>
		</div>
	);
};

export default ButtonGroup;
