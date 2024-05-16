
const FormInput = (props: any) => {
    return (
        <input
            defaultValue={props.form}
            onChange={props.change}
            name={props.name}
            className="checkout-input px-2"
            type={props.type}
            placeholder={props.placeholder && props.placeholder}
        />
    )
}

export default FormInput