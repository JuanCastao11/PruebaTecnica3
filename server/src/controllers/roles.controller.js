import connection from "../db";

export function obtenerRol(req,res){
    const sql = 'SELECT * FROM roles';

    connection.query(sql , (error , results) => {
        if(error){
            console.error('Estamos presentando un error al obtener los roles')
            res.status(500).json({error:'Estamos presentando un error al obtener los roles'})
        }
        res.status(200).json(results)
    })
}