import { Slot } from '@radix-ui/react-slot';
import { Text } from '../../util/Text';

function TextInputRoot(props) {
    return (
        <div className=' flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-100 bg-opacity-50 w-full focus-within:shadow-md focus-within:shadow-white'>
            <Text className='flex fex-row gap-3'>{props.children}</Text>
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputIcon(props) {
    return (
       <Slot className='w-6 h-6 text-yellow-400 '>
            {props.children}
       </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput(props) {
    return (
         <input
            className=" bg-transparent flex-1 text-purple-50 text-xs placeholder:text-white outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}