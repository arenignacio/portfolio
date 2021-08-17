import React from 'react';
import Style from 'styled-components';

const Container = Style.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: gray;
   height: 30px;
   width: 100vw;
   position: fixed;
   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Menu = Style.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 12px;
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
       }
   }
`;

const Logo = Style.div`
   display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: Monoton, sans-serif;
	color: white;
	border: white 1px solid;
	padding: 2px;

   &:hover {
   background: black;
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
