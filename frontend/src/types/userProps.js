import PropTypes from "prop-types";

const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  username: PropTypes.string.isRequired,
});

export default userPropTypes;
