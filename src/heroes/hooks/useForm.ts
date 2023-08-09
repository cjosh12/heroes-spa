import { useState } from "react"

interface TargetProps{
    target: {
        name: string;
        value: string;
    };
}

export const useForm = (initialForm = {})=>{
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: TargetProps) => {
        const {name, value} = target;
        setFormState({
        ...formState,
        [name]: value
        });
    }
    const onResetForm = ()=>{
        setFormState(initialForm);
    }
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}