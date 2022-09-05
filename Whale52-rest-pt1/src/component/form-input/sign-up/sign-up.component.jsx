import './sign-up.style.scss'

export const FormInputSignUp = ({ label, ...otherProps }) => {
    return (
      <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    );
  };
  