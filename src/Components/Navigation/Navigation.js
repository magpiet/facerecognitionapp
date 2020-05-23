import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if(isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue pointer' href='#0'>Sign Out</p>
				</nav>
			);
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('register')} className='f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue pointer' href='#0'>Register</p>
					<p onClick={() => onRouteChange('signin')} className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue pointer" href="#0">Sign In</p>
				</nav>
			);
		}
}

export default Navigation;