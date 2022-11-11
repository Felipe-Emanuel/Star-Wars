import { useRef } from "react"

import { Phone } from "phosphor-react"
import { IMaskInput } from 'react-imask';
import { TextInput } from "./TextInput";
import { Text } from "../../util/Text";

export const InputPhone = () => {

    const ref = useRef(null)
    const inputPhoneRef = useRef(null)

    return (
        <label htmlFor='phone' >
            <Text className=' text-white focus-within:opacity-100 opacity-25 items-stretch w-full flex flex-col gap-3 text-[12px]'>
            <TextInput.Root >
                <TextInput.Icon>
                    <Phone />
                </TextInput.Icon>
                    <IMaskInput
                        name='phone'
                        className='outline-none bg-transparent flex flex-col w-full placeholder:text-white'
                        mask={'+{55} {00} 9 0000-0000'}
                        radix='.'
                        ref={ref}
                        inputRef={inputPhoneRef}
                        placeholder='Digite algum telefone'
                    >
                </IMaskInput>
            </TextInput.Root>

            </Text>
        </label>
    )
}