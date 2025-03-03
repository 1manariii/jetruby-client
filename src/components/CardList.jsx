import Card from "./Card";

const cardListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const CardList = ({repositories}) => {
    return (
        <div style={cardListStyle}>
            { repositories && repositories.map(repository => (
                <Card repository={repository} key={repository.id} />
            ))}
        </div>
    )
}

export default CardList;