import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled, { CSSObject } from 'styled-components';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export type ButtonStyle = {
  variants: {
    [key in NonNullable<ButtonProps['variant']>]: CSSObject;
  };
} & {
  size: {
    [key in NonNullable<ButtonProps['size']>]: CSSObject;
  };
};

export const buttonStyles: ButtonStyle = {
  variants: {
    primary: {
      backgroundColor: '#2A0948',
      color: '#f2f2f2',
      '&:hover': {
        backgroundColor: '#22073a'
      },
      transitionDuration: '.5s',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;'
    },
    secondary: {
      backgroundColor: '#FF4C0C',
      '&:hover': {
        backgroundColor: '#cc3d0a'
      },
      transitionDuration: '.5s',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;'
    },
    outline: {
      border: '1px solid #FF4C0C',
      color: '#f2f2f2',
      '&:hover': {
        backgroundColor: '#FF4C0C',
        color: '#f2f2f2'
      },
      transitionDuration: '.5s'
    }
  },
  size: {
    sm: {
      padding: '0.25rem',
      fontSize: '0.75rem'
    },
    md: {
      padding: '0.55rem 1.25rem',
      fontSize: '1rem'
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1rem'
    }
  }
};

export const StyledButton = styled('button')<ButtonProps>(
  {
    borderRadius: '5px'
  },
  ({ variant = 'primary', size = 'md' }) => ({
    ...buttonStyles.variants[variant],
    ...buttonStyles.size[size]
  })
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);
