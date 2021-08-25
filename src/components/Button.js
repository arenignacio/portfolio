import style from 'styled-components';

const Container = style.a.attrs(({ href }) => ({ href }))`
   display: flex;
   justify-content: center;
   width: auto;
   padding: 10px 15px;
   border: 1px solid white;
   border-radius: 5px;
   color: white;

   &:active, &:focus{
      color: white;
   }
   
   &:hover {
      color: black;
      opacity: 0.8;
   }

   span {
      margin-left: 5px;
      padding-left: 5px;
   }

   object, img {
      width: 16px;

   }

   
  
   
   `;

const Button = ({ href, name, icon }) => {
	return (
		<Container href={href}>
			{icon.includes('svg') ? (
				<object id="logo" data={icon} type="image/svg+xml">
					icon
				</object>
			) : (
				<img src={icon} alt={name} />
			)}
			<span>{name}</span>
		</Container>
	);
};

export default Button;
