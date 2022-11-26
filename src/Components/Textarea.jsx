import React, { useState } from 'react';

export default function Textarea(props) {
	const [text, setText] = useState(''); //STATE HOOKS

	const [text2, setNewText] = useState(''); // for textarea 1

	const handleOnChange = (event) => {
		//console.log("On change");
		setText(event.target.value);
		// setText2(event.target.value);
	};
	const handleUpClick = () => {
		//console.log("uppercsae button got clicked" + "-" + text);
		let newText = text.toUpperCase();
		setText(newText);
		setNewText(newText);
		props.showAlert('Converted to Upper Case', 'success');
	};

	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		setNewText(newText);
		props.showAlert('Converted to Lower Case', 'success');
	};
	const handleClearClick = () => {
		let newText = '';
		setText(newText);
		setNewText(newText);
		props.showAlert('Text has been erased!!', 'success');
	};
	const handleCopy = () => {
		let newTxt = document.getElementById('mybox');
		newTxt.select();
		navigator.clipboard.writeText(newTxt.value);
		document.getSelection().removeAllRanges();
		props.showAlert('Copied to Clipboard', 'success');
	};
	const handleExtraSpaces = () => {
		let newText = text.replace(/\s+/g, ' ').trim();
		setText(newText);
		setNewText(newText);
		props.showAlert('Extra Spaces Removed!!', 'success');
	};
	const handleSentenceCaseClick = () => {
		let newText = text
			.split('. ')
			.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase() + '.')
			.join(' ');
		newText = newText.slice(0, newText.length - 1);
		setNewText(newText);
		props.showAlert('Converted to Sentence Case!!', 'success');
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
	//       props.showAlert("Stopped!!","success");
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

	//     props.showAlert("Started!!","success");
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
		setNewText(newtext);
		props.showAlert('Converted to Fun Text!!', 'success');
	};
	const handleReverse = () => {
		let newText = text.split(' ').reverse().join(' ');
		setText(newText);
		setNewText(newText);
		props.showAlert('Text has been Reversed!!', 'success');
	};
	const handleSPerLineClick = () => {
		let newText = text.replaceAll('.', '\n');
		setText(newText);
		setNewText(newText);
		props.showAlert('Paragraph got broke!!', 'success');
	};
	const [saved, setSaved] = useState('');

	const handleSave = () => {
		setSaved(text);
		props.showAlert('Your Current Text is Saved!!', 'success');
	};
	const handleOrgText = () => {
		setText(saved);
	};
	const mystyle = {
		backgroundColor: props.mode === 'light' ? '#00008b' : '#420000',
		display: 'block',
		width: '230%',
		margin: '5px',
		border: 'none',
		padding: '18px',
		fontSize: 28,
	};

	const class1 = {
		position: 'relative',
		marginLeft: '250px',
		marginTop: '10px',
	};
	return (
		<>
			<div style={{ display: 'flex' }}>
				<div
					className='btn-group'
					style={{
						cursor: 'pointer',
						display: 'block',
						width: '30%',
						marginTop: '30px',
					}}
				>
					<h2 style={mystyle} className='btn btn-danger btn-lg my-2 b'>
						{' '}
						<p style={{ fontSize: 35, marginTop: '10px' }}>--TRY NOW--</p>
					</h2>
					<button
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleOrgText}
					>
						My Original Text
					</button>
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleUpClick}
					>
						Convert to UpperCase
					</button>
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleLowClick}
					>
						Convert to LowerCase
					</button>
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleExtraSpaces}
					>
						Remove Extra Spaces
					</button>
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleReverse}
					>
						Reverse Sentence
					</button>
					{/* <button disabled={text.length===0} style={mystyle} className="btn btn-danger btn-lg" onClick={handleSpeak}>Text to Speech <button className="btn btn-dark btn-lg b" id="playAudio" onClick={toggle}>{playing ? "Pause" : "Play"}</button></button> */}
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleSPerLineClick}
					>
						Break Paragraph
					</button>

					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={handleSentenceCaseClick}
					>
						Make Sentence Case
					</button>
					<button
						disabled={text.length === 0}
						style={mystyle}
						className='btn btn-danger btn-lg'
						onClick={onAlternatingCase}
					>
						Alternating Case
					</button>
				</div>
				<div className='container' style={class1}>
					<br></br>
					<div
						className='p-2 mb-4 text-light ml-4'
						style={{
							backgroundColor: props.mode === 'light' ? '#318CE7' : '#380000',
						}}
					>
						<h2
							style={{
								fontSize: 45,
								marginLeft: '15px',
								fontFamily: 'arial',
								marginTop: '10px',
							}}
						>
							{' '}
							{props.heading}
						</h2>

						<div className='mb-1'>
							<textarea
								className={`form-control border border-1 border border-dark b text-${
									props.mode === 'light' ? 'dark' : 'light'
								} `}
								style={{
									backgroundColor: props.mode === 'light' ? 'white' : 'black',
									fontWeight: 500,
									fontSize: 30,
									marginTop: '20px',
									fontFamily: 'arial',
								}}
								onChange={handleOnChange}
								rows='13'
								value={text}
								id='myarea'
							></textarea>
						</div>
					</div>

					<div
						className={`b text-${props.mode === 'light' ? 'dark' : 'light'}`}
					>
						<p
							style={{
								marginTop: '20px',
								fontSize: 30,
								fontWeight: 600,
								fontFamily: 'arial',
							}}
						>
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

					<div
						className='p-2 text-light'
						style={{
							backgroundColor: props.mode === 'light' ? '#318CE7' : '#380000',
						}}
					>
						<h2
							style={{
								marginLeft: '15px',
								fontWeight: 600,
								fontSize: 45,
								fontFamily: 'arial',
							}}
						>
							{' '}
							Preview
							<button
								className='btn btn-dark btn-lg'
								onClick={handleCopy}
								style={{ float: 'right' }}
							>
								Copy Text
							</button>
						</h2>

						<div className='textareasss'>
							<textarea
								className={`form-control b text-${
									props.mode === 'light' ? 'dark' : 'light'
								} `}
								style={{
									backgroundColor: props.mode === 'light' ? 'white' : 'black',
									fontWeight: 500,
									fontSize: 30,
									border: 'black',
									width: '1000px',
									marginTop: '20px',
									fontFamily: 'arial',
								}}
								rows='13'
								value={text2}
								id='mybox'
								readOnly
							>
								<p>{text}</p>
							</textarea>
						</div>
					</div>
					<br></br>
				</div>
				<div>
					<button
						disabled={text.length === 0}
						className='btn btn-dark btn-lg b'
						onClick={handleClearClick}
						style={{
							marginLeft: '60px',
							float: 'right',
							display: 'flex',
							marginTop: '600px',
							width: '100%',
							textAlign: 'center',
						}}
					>
						Clear Text
					</button>
					<button
						disabled={text.length === 0}
						style={{
							marginLeft: '60px',
							float: 'right',
							display: 'flex',
							marginTop: '15px',
							width: '100%',
							textAlign: 'center',
						}}
						className='btn btn-dark btn-lg'
						onClick={handleSave}
					>
						Save Text
					</button>
				</div>
			</div>
		</>
	);
}
