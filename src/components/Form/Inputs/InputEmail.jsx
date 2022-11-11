import { Envelope } from "phosphor-react"
import { TextInput } from "./TextInput"

export const InputEmail = () => {
    return (
        <label htmlFor='email' className='gap-3 focus-within:opacity-100 opacity-25 flex flex-col items-stretch w-full'>
            <TextInput.Root >
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                    name='email'
                    id='name'
                    type='email'
                    placeholder="Digite o seu E-mail" />
            </TextInput.Root>
        </label>
    )
}