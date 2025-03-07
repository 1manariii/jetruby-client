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
                { repositories.length > 0 ? repositories.map(repository => (
                    <Card repository={repository} key={repository.id} />
                )) : (
                    <h3 style={{textAlign: "center", color: 'red', fontWeight: 100, letterSpacing: '4px'}}>Ничего не найдено!</h3>
                )}
            </div>
        </>
    )
}

export default CardList;