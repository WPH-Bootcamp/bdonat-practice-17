const CustomButton = ({handleClick, count}) => { // Child
  return <button onClick={handleClick}>count is {count}</button>;
};

export default CustomButton;