import React,{Fragment,useState} from 'react'
import emailjs from 'emailjs-com'

function Formulario() {
    const [data,setData]=useState({
        name: '',
        email:'',
        acto:'',
        url: '',
        description: '',
    })
    const handleInputChange=(event)=>{
        // console.log(event.target.value);
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }
    const sendData=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_rh5btzb', 'template_5wdyk7r', e.target, 'imWKSMGgD_tBDgODA').then(res=>{
            alert('se a enviado correctamente');
            console.log(res);
        });
        console.log(data);
    }

  return (
    <Fragment>
    
        {/* <h1>Formulario</h1> */}
        <form action="#" onSubmit={sendData}  >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="ingresa tu nombre" 
                    className='campo'
                    onChange={handleInputChange} 
                    required
                    />
                    <input 
                    type="text" 
                    name="artist_name" 
                    placeholder="ingresa tu nombre artistico" 
                    className='campo'
                    onChange={handleInputChange} 
                    required
                    />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="ingresa tu correo" 
                    className='campo' 
                    onChange={handleInputChange} 
                    required 
                    />
                <input 
                    type="text" 
                    name="acto" 
                    placeholder="acto Example: payaso, trapecio,malabares..." 
                    className='campo' 
                    onChange={handleInputChange} 
                    required
                    />
                <input 
                type="text" 
                name="url" 
                placeholder='ingresa el link de tu video' 
                className='campo' 
                onChange={handleInputChange} 
                required
                />
                <textarea 
                name="description" 
                placeholder="hablanos de ti" 
                cols="30" 
                rows="10" 
                onChange={handleInputChange}
                required></textarea>
                <button className="button">
                    <span className='text'>Enviar</span>
                    <i className='ri-check-line icon'></i>
                </button>
                <img src="" alt="" />
            </form>
              
    </Fragment>
  )
}

export default Formulario