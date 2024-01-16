type ButtonProps = {
    variant: 'primary' | 'cta';
    onClick: () => void;
    selected?: boolean;
    children?: React.ReactNode;
}

const Button = ({ variant, onClick, selected, children }: ButtonProps) => {
    return (
        <button 
            className={variant === 'primary' ? `primary-btn ${selected ? 'selected' : ''}` : 'cta-btn' } 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;