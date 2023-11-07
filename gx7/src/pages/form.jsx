import React, { useEffect, useState } from 'react';
import { useEmpleados} from '../context/empleadoContext.jsx'
import { useAreas } from '../context/areaContext.jsx';
import { useRoles } from '../context/rolContext.jsx';
import { useForm } from 'react-hook-form'


function Form() {
  const [sexo, setSexo] = useState('');

  const handleChange = (event) => {
    setSexo(event.target.value);
  };

  const { empleados, mostrarEmpleado,añadirEmpleados } = useEmpleados();
  const { roles, recibirRoles } = useRoles();
  const { areas, mostrarAreas } = useAreas();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    mostrarEmpleado();
    recibirRoles();
    mostrarAreas();
  }, []);

  const [rolElegido, setRolElegido] = useState([]);

  const handleRolChange = (rolesId) => {
    if (rolElegido.includes(rolesId)) {
      setRolElegido(rolElegido.filter((id) => id !== rolesId));
    } else {
      setRolElegido([...rolElegido,rolesId]);
    }
  };

  const onSubmit = handleSubmit((data) => {
    const empleadosData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id, 
      descripcion: data.descripcion,
      roles: rolElegido,      
    };
    añadirEmpleados(empleadosData);
  });


  return (
    <>
      <div className="form w-full  ">
        <form action="" className="flex justify-center m-10" onSubmit={onSubmit}>
          <div className="w-[40%] m-10 ">
            <div className="mb-4">
              <label htmlFor="nombre" className="block">Nombre Completo</label>
              <input type="text" id="nombre" className="w-full border-2 rounded-md p-2" {...register("nombre")}/>
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="block">Correo Electronico</label>
              <input type="text" id="correo" className="w-full border-2 rounded-md p-2" {...register("email")}/>
            </div>
            <div className="flex mb-4">
              <label className="block mr-4">Sexo</label>
              <div className="flex flex-col">
                <label htmlFor="femenino" className="mb-1">Femenino*
                <input type="radio" id="femenino" name="sexo" value="femenino" {...register("sexo")} checked={sexo === 'femenino'} onChange={handleChange} className="mr-2"/>
                </label>
                <label htmlFor="masculino">Masculino*
                  <input type="radio" id="masculino" {...register("sexo")} name="sexo" value="masculino" checked={sexo === 'masculino'} onChange={handleChange} className="mr-2" />
                </label>
              </div>
            </div>
      <div className="mb-4">
        <label htmlFor="area" className="block">Area</label>
        <select id="area" className="w-full border-2 rounded-md p-2" {...register("area_id")}>
          <option value="vacio"></option>
          <option value="Estudiante">Estudiante</option>
          <option value="Profesor">Profesor</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block">Descripción</label>
        <textarea id="descripcion" className="w-full border-2 rounded-md p-2"></textarea>
        <div className="mb-1 ml-[9%]">
            <input type="checkbox" id="boletin" className="mr-2" />
            <label htmlFor="boletin">Deseo recibir boletin informativo</label>
          </div>
      </div>
      <div className="flex mb-4">
        <label className="block mr-4">Roles*</label>
        <div className="flex flex-col">
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
      <button type="button" className="text-white bg-gradient-to-r w-32 from-blue-500 via-blue-600 to-blue-700
     focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 ">Enviar</button>
      </div>
    </div>
  </form>
</div>

    </>
  )
}

export default Form
