import Card from "./Card";
import {useEffect} from "react";

const cardListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const CardList = ({repositories}) => {

    useEffect(()=>{},[repositories])
    return (
        <div style={cardListStyle}>
            { repositories && repositories.map(repository => (
                <Card repository={repository} key={repository.id} />
            ))}
        </div>
    )
}

export default CardList;