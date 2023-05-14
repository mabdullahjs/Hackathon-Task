import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MACards(props) {
    const { image, title, detail , onClick , onClickTitle } = props
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography style={{cursor:'pointer'}} onClick={onClickTitle} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} size="small">Book Now</Button>
            </CardActions>
        </Card>
    );
}