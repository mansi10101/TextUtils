import { Box, Grid } from '@mui/material';
import React from 'react';
import styles from '../stylesheets/navbar.module.css';
import { NavLink } from 'react-router-dom';

const Twmp = ({ mode, toggleMode }) => {
	const navLinkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
		};
	};
	return (
		<Grid
			container
			xs={12}
			className={styles.container}
			style={{ backgroundColor: mode === 'light' ? '#318CE7' : '#009BB6' }}
		>
			<span className={styles.title}>TextUtils</span>
			<Box
				className={styles.navLinkSection}
				sx={{ display: { xs: 'none', sm: 'flex' } }}
			>
				<NavLink
					to='/TextUtils'
					className={styles.navLinks}
					style={navLinkStyle}
				>
					Home
				</NavLink>
				<NavLink to='/About' className={styles.navLinks} style={navLinkStyle}>
					About
				</NavLink>
			</Box>
			<Box
				className={styles.togglerMode}
				sx={{ display: { xs: 'none', sm: 'flex' } }}
			>
				<div className='form-check form-switch'>
					<input
						className='form-check-input'
						type='checkbox'
						role='switch'
						onClick={toggleMode}
						id='flexSwitchCheckDefault'
						style={{ accentColor: 'orange' }}
					/>
					<label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
						Dark Mode
					</label>
				</div>
			</Box>
		</Grid>
	);
};

export default Twmp;
