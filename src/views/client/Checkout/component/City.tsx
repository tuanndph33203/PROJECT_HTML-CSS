
import FormSelect from './FormSelect'

const City = () => {
    const citys = [
        'Eastern Province',
        'Northern Province',
        'Southern Province',
        'Western Province',
    ]
    return (
      <FormSelect list={citys}></FormSelect>
    )
}

export default City