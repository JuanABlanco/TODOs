import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '@material-ui/core/Input';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import '../App.css';


const ListaTareas = () => {
    const [añadiendo,setAñadiendo] = React.useState(false)
    const [mensajes] = React.useState([{mensaje: 'Sacar la basura', estado: 0}, {mensaje: 'Estudiar', estado: 1}, {mensaje: 'Estudiar', estado: 3}]) 

    const agregarTarea = () => {
        const textoMensaje = document.getElementById('input');
        const tareaNueva = {mensaje: textoMensaje.value, estado: 0}
        mensajes[mensajes.length] = tareaNueva
    }

    const completarTarea = () => {

    }

    return (
        <div className='Glass'>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() =>{ setAñadiendo(true)}}>Añadir</Button>
                </ButtonGroup>
            </Grid>
            { 
                añadiendo &&
                <Grid item xs={12}>
                    <Input id='input' style={{color: 'white'}}/>
                    <Button color="primary" onClick={(e) =>{ agregarTarea(); setAñadiendo(false)}}>Aceptar</Button>
                    <Button color="secondary" onClick={() =>{ setAñadiendo(false)}}>Cancelar</Button>
                </Grid>
            }
            {
                mensajes.map((objetos,idx) => ( 
                    objetos.estado === 0 &&
                    <Grid key={idx} item xs={12} style={{marginLeft: '20vw', marginRight: '20vw', fontColor: 'black'}}>
                        <SnackbarContent message={objetos.mensaje} action={
                            <>
                                
                                <Button size="small" style={{color: 'rgba(19, 202, 145, 1)'}} onClick={() => objetos.estado=1}>
                                    Listo
                                </Button>
                                <Button size="small" style={{color: 'red'}}>
                                    Cancelar
                                </Button>
                            
                            </>
                        }
                        style={{ backgroundColor: `rgba(59, 85, 206, 0.9)` }}/>
                    </Grid>
                ))
            }
            <br/>
            <Grid item xs={12} style={{marginLeft: '10vw', marginRight: '45vw'}}>
                <SnackbarContent message={'Completadas'} 
                style={ { backgroundColor: `rgba(0, 0, 0, 0.9)` } }/>
            </Grid>
            {
                mensajes.map((objetos,idx) => ( 
                    objetos.estado === 1 &&
                    
                    <Grid key={idx} item xs={12} style={{marginLeft: '20vw', marginRight: '20vw', fontColor: 'white'}}>
                        <SnackbarContent message={objetos.mensaje} 
                        style={ { backgroundColor: `rgba(19, 202, 145, 0.9)` } }/>
                    </Grid>
                    
                ))
            }
            <br/>
            <Grid item xs={12} style={{marginLeft: '10vw', marginRight: '45vw'}}>
                <SnackbarContent message={'Canceladas'} 
                style={ { backgroundColor: `rgba(0, 0, 0, 0.9)` } }/>
            </Grid>
            {
                mensajes.map((objetos, idx) => ( 
                    objetos.estado === 3 &&
                    
                    <Grid key={idx} item xs={12} style={{marginLeft: '20vw', marginRight: '20vw', fontColor: 'white'}}>
                        <SnackbarContent message={objetos.mensaje} 
                        style={ { backgroundColor: `rgba(230, 60, 60, 0.9)` } }/>
                    </Grid>
                    
                ))
            }
        </Grid>
        </div>
    )
}

export default ListaTareas