import React from 'react'

function Form() {
  return (
    <>
    <div className="form w-full">
      <form action="" className=' w-full flex m-10 justify-center'>
        <div className=' w-[40%]'>
        <div className="">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id='nombre' />
        </div>
        <div className=''>
        <label htmlFor="correo">Correo Electronico</label>
          <input type="text" id='correo' />
        </div>
        <div className=' flex  '>
          <label htmlFor="">Sexo</label>
        <div className=' flex flex-col'>
        <label htmlFor="femenino">Femenino*</label>
          <input type="radio" id='femenino' />
          <label htmlFor="masculino">Masculino*</label>
          <input type="radio" id='masculino' />
        </div>
        </div>
        <div className=' '>
          <label htmlFor="area">Area</label>
        <select value="" name="" id="area" className=' w-[95%] border-2 outline-0  h-[40px] rounded-md' >
        <option value="vacio" ></option>
          <option value="Estudiante" >Estudiante</option>
          <option value="Profesor" >Profesor</option>
        </select>
        </div>
        <div className=''>
          <label htmlFor="descripcion">Descripción</label>
          <input type="textarea" id='descripcion' /> 
        </div>
        <div className=' flex'>
          <label htmlFor="">Roles*</label>
          <div className=' flex flex-col'>
            <input type="checkbox" id='boletin' />
            <label htmlFor="boletin">Deseo recibir boletin informativo</label>
            <input type="checkbox" id='Profesional' />
            <label htmlFor="Profesional">Profesional de proyectos - Desarrollador</label>
            <input type="checkbox" id='Gerente estrategico' />
            <label htmlFor="Gerente estrategico">Gerente estrategico</label>
            <input type="checkbox" id='Auxiliar Administrativo' />
            <label htmlFor="Auxiliar Administrativo">Auxiliar Administrativo</label>
          </div>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form
