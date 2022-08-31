import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
    googleSign : 'google-sign',
    submitButton : 'submit-button'
}

export const Button = ({ children, buttonType, ...otherProps }) => {
    return (
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  };
  