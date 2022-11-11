import { Lock } from "phosphor-react"
import { TextInput } from "./TextInput"

export const InputConfirmPassword = () => {
    return (
        <label htmlFor='password' className='focus-within:opacity-100 opacity-25 items-stretch w-full flex flex-col gap-3 '>
            <TextInput.Root>
                <TextInput.Icon>
                <Lock />
                </TextInput.Icon>
                <TextInput.Input
                    name='confirmPassword'
                    type='password'
                    id='confirm-password'
                    placeholder="Confirme sua senha"
                />
            </TextInput.Root>
        </label>
    )
}