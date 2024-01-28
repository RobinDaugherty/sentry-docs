import {forwardRef, Fragment} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, name, type, className, required, ...props}, ref) => {
    return (
      <Fragment>
        <label htmlFor={name} className="block text-xs font-medium text-gray-700">
          {label}
          {required && (
            <Fragment>
              &nbsp;<span className="font-bold text-secondary">*</span>
            </Fragment>
          )}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          className="mt-1 border-gray-200 shadow-sm sm:text-sm"
          {...props}
          ref={ref}
        />
      </Fragment>
    );
  }
);
