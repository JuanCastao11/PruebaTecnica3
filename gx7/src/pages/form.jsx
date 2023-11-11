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

  const { empleados, mostrarEmpleado,añadirEmpleados,deleteEmpleados } = useEmpleados();
  const { roles, recibirRoles } = useRoles();
  const { areas, mostrarAreas } = useAreas();
  const { register, handleSubmit } = useForm();
  const [BoletinQ, setBoletinQ] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [empleadoEdit, setEmpleadoEdit] = useState(null);

  const areNameMap = areas.reduce((acc,area) => {
    acc[area.id] = area.nombre;
    return acc;
  }, {});

  useEffect(() => {
    mostrarEmpleado();
    recibirRoles();
    mostrarAreas();
  }, []);

  const handleBoletinQChange = (event) => {
    setBoletinQ(event.target.checked);
  }

  const handleDeleteEmpleado = (empleadoId) => {
    deleteEmpleados(empleadoId);
  }

  const onSubmit = handleSubmit((data) => {
    const empleadosData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id, 
      descripcion: data.descripcion,
      boletin: BoletinQ ? 1 : 0,      
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
        <select  name='area_id' className=" w-full border-2 rounded-md p-2" {...register("area_id")}>
        {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.nombre}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block">Descripción</label>
        <textarea id="descripcion" className="w-full border-2 rounded-md p-2 " {...register("descripcion")}></textarea>
        <div className="mb-1 ml-[9%]">
            <input type="checkbox" id="boletin" onChange={handleBoletinQChange} className="mr-2" />
            <label htmlFor="boletin">Deseo recibir boletin informativo</label>
          </div>
      </div>
      <div className="form__areas">
            {roles.map((rol) => (
              <div className='roles' key={rol.id}>
                <label>
                  <input type="checkbox" />
                  {rol.nombre}
                </label>
                <input type="hidden" name="roles" />
              </div>
            ))}
          </div>
      <div className="boton flex justify-center">
      <button className="text-white bg-gradient-to-r w-32 from-blue-500 via-blue-600 to-blue-700
     focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 " >Enviar</button>
      </div>
    </div>
  </form>
</div>

    </>
  )
}

export default Form
