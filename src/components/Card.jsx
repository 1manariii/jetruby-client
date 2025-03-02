
const cardStyle = {
    background: '#343434',
    color: 'white',
    padding: "12px 24px",
    margin: "1rem",
    width: "20%",
}

const Card = ({repository}) => {
    const {name, owner, stars, watch} = repository
    return (
        <div style={cardStyle}>
            <h3>Наименование: {name}</h3>
            <h3>Владелец: {owner}</h3>
            <h4>Кол-во звезд: {stars}</h4>
            <h4>Кол-во просмотров: {watch}</h4>
        </div>
    )
}

export default Card;