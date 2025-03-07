const Arrow = ({ color }: { color?: string }) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8596 30.2812L17.2166 27.9242L7.09318 17.8008L29.697 17.8008L29.697 14.4774L7.09318 14.4774L17.2166 4.35396L14.8596 1.99693L0.717438 16.1391L14.8596 30.2812Z"
        fill={color ? color : "#000"}
      />
    </svg>
  );
};
export default Arrow;
