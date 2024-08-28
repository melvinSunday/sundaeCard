import PropTypes from "prop-types";

const Attributes = ({ children }) => {
  return <div>{children}</div>;
};

Attributes.propTypes = {
  children: PropTypes.string,
};
export default Attributes;
