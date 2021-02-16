import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '@material-ui/core/Input';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import '../App.css';


const ListaTareas = () => {
    const [añadiendo,setAñadiendo] = React.useState(false)
    const [mensajes, setMensajes] = React.useState([]) 

    const agregarTarea = () => {
        const textoMensaje = document.getElementById('mensaje');
        const horaMensaje = document.getElementById('hora');
        if(textoMensaje.value && textoMensaje.value !== ''){
            const tareaNueva = horaMensaje.value ? {mensaje: textoMensaje.value, estado: 0, hora: horaMensaje.value} : {mensaje: textoMensaje.value, estado: 0}
            mensajes[mensajes.length] = tareaNueva
        }   
            
    }

    const cambiarEstado = (mensaje, nuevoValor) => {
        var nuevosEstados = mensajes.filter(Objeto => { 
                if(Objeto.mensaje === mensaje.mensaje){
                    Objeto.estado = nuevoValor
                }
                return Objeto
            }
        )
        setMensajes(nuevosEstados)
    }

    return (
        <div className='Glass'>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button onClick={() =>{ setAñadiendo(true)}}  style={{color: 'rgba(19, 202, 145, 1)'}} >Añadir</Button>
            </Grid>
            { 
                añadiendo &&
                <Grid item xs={12}>
                    <Input id='mensaje' placeholder='Tarea' style={{color: 'white', margin: '1vw'}}/>
                    <Input id='hora' type='time' style={{color: 'white', margin: '1vw'}}/>
                    <Button style={{color: 'rgba(19, 202, 145, 1)'}} onClick={(e) =>{ agregarTarea(); setAñadiendo(false)}}>Aceptar</Button>
                    <Button color="secondary" onClick={() =>{ setAñadiendo(false)}}>Cancelar</Button>
                </Grid>
            }
            {
                mensajes.map((objetos,idx) => ( 
                    objetos.estado === 0 &&
                    <Grid key={idx} item xs={12} style={{marginLeft: '20vw', marginRight: '20vw', fontColor: 'black'}}>
                        <SnackbarContent message={objetos.mensaje} action={
                            <>
                                {   
                                    objetos.hora &&
                                    <Input type='time' style={{color: 'white'}} value={objetos.hora} readOnly></Input>
                                }
                                <Button size="small" style={{color: 'rgba(19, 202, 145, 1)'}} onClick={() => {cambiarEstado(objetos,1)}}>
                                    Listo
                                </Button>
                                <Button size="small" style={{color: 'red'}} onClick={() => {cambiarEstado(objetos,2)}}>
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
                    objetos.estado === 2 &&
                    
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