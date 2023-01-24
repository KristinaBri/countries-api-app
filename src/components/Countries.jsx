import React, { useState, useEffect } from 'react';
import '../App';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //For pagination:
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(20);

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,area');
            setCountries(response.data);
            setLoading(false);
        }
        fetchCountries();
    }, []);

    //Get current countries
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    
    
    return (
        <Container fixed>
            <Grid 
                container 
                spacing={3} 
                columns={12} 
                sx={{ margin: "20px 0" }}
            >
                <Grid 
                    item 
                    xs={12} 
                    sm={12} 
                    md={12} 
                    lg={12}
                >
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>⬆</Button>
                        <Button>⬇</Button>
                    </ButtonGroup>
                </Grid>
                {currentCountries.map((country) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={12} 
                        md={6} 
                        lg={6} 
                        key={country.name}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {country.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       {`Region: ${country.region}`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       {`Area: ${country.area} (square km)`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default Countries