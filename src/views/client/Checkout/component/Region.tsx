import FormSelect from "./FormSelect";


const SelectRegion = () => {
    const countries = [
        'Vietnam',
        'Korea',
        'Japan',
        'United States',
        'Canada',
        'Germany',
        'France',
        'Brazil',
        'Argentina',
        'Mexico',
        'Italy',
        'Spain',
        'Australia',
        'India',
        'China',
        'South Africa',
        'Russia',
        'United Kingdom',
        'Switzerland',
        'Sweden',
    ];

    return (
        <FormSelect list={countries}></FormSelect>
    )
}

export default SelectRegion