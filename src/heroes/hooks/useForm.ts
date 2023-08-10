import { useState, ChangeEvent } from "react"

interface FormState {
    [key: string]: string;
}


export const useForm = (initialForm:FormState = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const onResetForm = () => {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}