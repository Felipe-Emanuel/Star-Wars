import { TextInput } from './TextInput';
import { Lock } from 'phosphor-react'

export const InputPassword = () => {
    return(
        <label htmlFor='password' className='flex focus-within:opacity-100 opacity-25 items-stretch w-full flex-col gap-3 '>
            <TextInput.Root >
                <TextInput.Icon>
                    <Lock />
                </TextInput.Icon>
                <TextInput.Input
                    name='password'
                    id='password'
                    type='password'
                    placeholder="Digite sua senha" />
            </TextInput.Root>
        </label>
    )
}
