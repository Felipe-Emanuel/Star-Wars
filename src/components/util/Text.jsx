import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export function Text({children, asChield, className }) {
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                'font-Cinzel',
                {},
                className,
            )}
        >
            {children}
        </Comp>
    )
}