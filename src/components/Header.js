import React from 'react';
import Style from 'styled-components';

const Container = Style.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: hsla(200, 0%, 45%, 1);
   height: 30px;
   width: 100vw;
   position: fixed;
   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	z-index: 2;
`;

const Menu = Style.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.8rem;
	letter-spacing: 0.8px;
   font-family: Roboto, sans-serif;
   color: white;
   height: 30px;

   ul {
      height: 100%;
      list-style: none;
      display: flex;
   }

   li {

    

      &:hover {
         background: black;
           cursor: pointer;
      }

      div {
           vertical-align: middle;
           text-align: center;
			  user-select: none;
       }
   }
`;

const Logo = Style.div`
   display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: "Zen Tokyo Zoo", sans-serif;
	color: white;
	border: white 1px solid;
	padding: 2px;

   &:hover {
   background: hsla(360, 50%, 50%, 0.8);
   }
`;

const marginRight = {
	margin: '5px 5px',
};

const Header = () => {
	return (
		<Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '0px 2rem',
					width: '100vw',
				}}
			>
				<Logo>E.M.I</Logo>
				<div></div>
				<Menu>
					<ul>
						<li>
							<div style={marginRight}>About</div>
						</li>
						<li>
							<div style={marginRight}>Projects</div>
						</li>
						<li>
							<div style={marginRight}>Contact</div>
						</li>
					</ul>
				</Menu>
			</div>
		</Container>
	);
};

export default Header;
