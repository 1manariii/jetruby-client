import Card from "./Card";

const cardListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const CardList = ({repositories}) => {
    return (
        <>
            <h1 style={{textAlign: "center", color: 'white', fontWeight: 100, letterSpacing: '4px'}}>Рейтинг репозиториев</h1>
            <div style={cardListStyle}>
                { repositories && repositories.map(repository => (
                    <Card repository={repository} key={repository.id} />
                ))}
            </div>
        </>
    )
}

export default CardList;