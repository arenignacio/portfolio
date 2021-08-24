import style from 'styled-components';

const Container = style.a.attrs(({ href }) => ({ href }))`
display: flex;
align-items: flex-start;
   padding: 10px 15px;
   border: 1px solid white;
   border-radius: 5px;
   color: white;

   img { margin-right: 5px;}
   
   `;

const Button = ({ href, name, icon }) => {
	return (
		<Container href={href}>
			<img src={icon} alt={name} width="20px" />
			<span>{name}</span>
		</Container>
	);
};

export default Button;
