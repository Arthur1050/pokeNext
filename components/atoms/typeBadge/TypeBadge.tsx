interface Props {
    type: {
        slot: number,
        type: {name: string, url: string}
    }
}

export const colorType = (type:string) => {
    switch(type) {
            case 'bug': return '#B9BF04';
            case 'grass': return '#618C03';
            case 'fire': return '#E8740C';
            case 'water': return '#77B9E3';
            case 'psychic': return '#f35182';
            case 'rock': return '#A6948D';
            case 'electric': return '#F2BC21';
            case 'poison': return '#77009C';
            case 'fighting': return '#c93129';
            default: return '#b2b2b2';
        }
}

export default function TypeBadge({type}:Props) {
    return (
            <span style={{
                backgroundColor: colorType(type.type.name)
            }}>{type.type.name}</span>
        )
}