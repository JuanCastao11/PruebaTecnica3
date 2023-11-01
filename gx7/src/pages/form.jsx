import React, { useState } from 'react';

function Form() {
  const [sexo, setSexo] = useState('');

  const handleChange = (event) => {
    setSexo(event.target.value);
  };

  return (
    <>
      <div className="form w-full  ">
        <form action="" className="flex justify-center m-10">
          <div className="w-[40%] m-10 ">
            <div className="mb-4">
              <label htmlFor="nombre" className="block">Nombre Completo</label>
              <input type="text" id="nombre" className="w-full border-2 rounded-md p-2"/>
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="block">Correo Electronico</label>
              <input type="text" id="correo" className="w-full border-2 rounded-md p-2"/>
            </div>
            <div className="flex mb-4">
              <label className="block mr-4">Sexo</label>
              <div className="flex flex-col">
                <label htmlFor="femenino" className="mb-1">Femenino*
                <input type="radio" id="femenino" name="sexo" value="femenino" checked={sexo === 'femenino'} onChange={handleChange} className="mr-2"/>
                </label>
                <label htmlFor="masculino">Masculino*
                  <input type="radio" id="masculino" name="sexo" value="masculino" checked={sexo === 'masculino'} onChange={handleChange} className="mr-2" />
                </label>
              </div>
            </div>
      <div className="mb-4">
        <label htmlFor="area" className="block">Area</label>
        <select id="area" className="w-full border-2 rounded-md p-2">
          <option value="vacio"></option>
          <option value="Estudiante">Estudiante</option>
          <option value="Profesor">Profesor</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block">Descripción</label>
        <textarea id="descripcion" className="w-full border-2 rounded-md p-2"></textarea>
      </div>
      <div className="flex mb-4">
        <label className="block mr-4">Roles*</label>
        <div className="flex flex-col">
          <div className="mb-1">
            <input type="checkbox" id="boletin" className="mr-2" />
            <label htmlFor="boletin">Deseo recibir boletin informativo</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Profesional" className="mr-2" />
            <label htmlFor="Profesional">Profesional de proyectos - Desarrollador</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Gerente estrategico" className="mr-2" />
            <label htmlFor="Gerente estrategico">Gerente estrategico</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Auxiliar Administrativo" className="mr-2" />
            <label htmlFor="Auxiliar Administrativo">Auxiliar Administrativo</label>
          </div>
        </div>
      </div>
      <div className="boton flex justify-center">
      <button type="button" class="text-white bg-gradient-to-r w-32 from-blue-500 via-blue-600 to-blue-700
     focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 ">Enviar</button>
      </div>
    </div>
  </form>
</div>

    </>
  )
}

export default Form
