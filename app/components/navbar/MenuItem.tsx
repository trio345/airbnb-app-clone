'use client';

interface MenuItemProps {
    onClick: () => void,
    label: string,
    testid: string
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    testid
}) => {
    return ( 
        <div
            onClick={onClick}
            className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
            "
            data-testid={testid}
        >
            {label}
        </div>
     );
}
 
export default MenuItem;