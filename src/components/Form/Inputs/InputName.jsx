import { User } from "phosphor-react"
import { TextInput } from "./TextInput"

export const InputName = () => {
    return (
        <label htmlFor='name' className='focus-within:opacity-100 opacity-25 items-stretch w-full flex flex-col gap-3 '>
            <TextInput.Root>
                <TextInput.Icon>
                <User />
                </TextInput.Icon>
                <TextInput.Input
                    name='name'
                    type='name'
                    id='name'
                    placeholder="Escreva um nome..."
                />
            </TextInput.Root>
        </label>
    )
}