import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Chip, Stack, Tooltip} from "@mui/material";
import React from "react";

const cardStyle = {
    color: 'white',
    padding: "12px 24px",
    margin: "1rem",
    width: "10%",
    background: "rgba(255, 255, 255, 0.4)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.2px)",
    border: "1px solid rgba(0, 0, 0, 0.24)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem"
}

const numberForCard = {
    position: 'relative',
    background: "#007cf3",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    right: "42%",
    rotate: "315deg"
}

const Card = ({repository}) => {
    const {id, name, owner, stars, watch} = repository
    return (
        <>
            <div style={cardStyle}>
                <span style={numberForCard}>№ {id}</span>
                <Tooltip title="Нажмите, чтобы открыть репозиторий на GitHub">
                    <a href={`https://github.com/${owner}/${name}`}><Chip label={name} color="secondary" variant="contained" /></a>
                </Tooltip>
                <Stack width="100%" alignItems="center" gap="1rem" justifyContent="space-between" flexDirection="row"><AccountBoxIcon /> {owner}</Stack>
                <Stack width="100%" alignItems="center" gap="1rem" justifyContent="space-between" flexDirection="row"><StarIcon /> {stars}</Stack>
                <Stack width="100%" alignItems="center" gap="1rem" justifyContent="space-between" flexDirection="row"><VisibilityIcon /> {watch}</Stack>
            </div>
        </>
    )
}

export default Card;