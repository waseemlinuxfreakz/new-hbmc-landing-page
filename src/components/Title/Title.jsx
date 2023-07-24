import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ subtitle, children, className }) => {
  return (
    <h2
      className={`site-title text-2xl lg:text-3xl font-semibold  ${className}`}
    >
      {subtitle ? subtitle : "Our"}
      <span> {children}</span>
    </h2>
  );
};

export default Title;
