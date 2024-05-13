const FormSelect = (props : any) => {
  return (
    <select className="grey">
            {props.list.map((item : string, index : number)  => (
                <option key={index}>{item}</option>
            ))}
        </select>
  )
}
export default FormSelect