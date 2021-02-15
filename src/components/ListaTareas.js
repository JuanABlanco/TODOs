import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '@material-ui/core/Input';
import SnackbarContent from '@material-ui/core/SnackbarContent';


const ListaTareas = () => {
    const [añadiendo,setAñadiendo] = React.useState(false)
    var mensajes = [{mensaje: 'Sacar la basura', estado: 0}, {mensaje: 'Estudiar', estado: 0}]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() =>{ setAñadiendo(true)}}>Añadir</Button>
                    
                </ButtonGroup>
            </Grid>
            { 
                añadiendo &&
                <Grid item xs={12}>
                    <Input style={{color: 'white'}}/>
                    <Button color="primary" onClick={() =>{ setAñadiendo(false)}}>Aceptar</Button>
                    <Button color="secondary" onClick={() =>{ setAñadiendo(false)}}>Cancelar</Button>
                </Grid>
            }
            {
                mensajes.map((objetos) => ( 
                    <Grid item xs={12} style={{marginLeft: '20vw', marginRight: '20vw', fontColor: 'black'}}>
                        <SnackbarContent message={objetos.mensaje} action={
                            <>
                                <Button size="small" style={{color: 'green'}} onClick={() => objetos.estado=1}>
                                    Listo
                                </Button>
                                <Button size="small" style={{color: 'red'}}>
                                    Cancelado
                                </Button>
                            </>
                        }
                        style={ objetos.estado === 1 ? { backgroundColor: `linear-gradient(
                            170deg,
                            rgba(5, 175, 79, 0.9),
                            rgba(17, 175, 86, 0.6),
                            rgba(84, 175, 123, 0.3)
                          )` } : 
                        { backgroundColor: `white` }}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ListaTareas