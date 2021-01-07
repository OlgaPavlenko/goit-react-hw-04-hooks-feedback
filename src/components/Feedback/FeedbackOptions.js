import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="group-button">
      {options.map(({ id, name, type }) => (
        <button
          type="button"
          data-action={type}
          key={id}
          onClick={() => onLeaveFeedback(type)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
