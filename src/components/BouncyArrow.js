import Style from 'styled-components';

const Container = Style.a.attrs(({ href }) => ({
	href,
}))`
   height: 2rem;
   width: 2rem;
   position: absolute;
   top: 85vh;
   transform: rotate(45deg);
   border-right: 2px solid white;
   animation: bounce infinite 5s;

   @keyframes bounce {


      50% {
         top: 92vh;
         opacity: 0.3;
      }
   }
`;

const BouncyArrow = ({ href }) => {
	return (
		<Container href={href}>
			<div
				style={{
					borderBottom: '2px solid white',
					width: '2rem',
					height: '2rem',
					transform: 'translateX(15px) translateY(-15px)',
				}}
			>
				<div
					style={{
						border: '2px solid white',
						borderRadius: '25px',
						width: '2rem',
						height: '2rem',
						transform: 'translateX(0px) translateY(15px)',
					}}
				></div>
			</div>
		</Container>
	);
};

export default BouncyArrow;
