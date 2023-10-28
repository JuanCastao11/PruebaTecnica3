import database from '../db.js'

export function RecibirRoles(req, res){
    const sql = 'SELECT * FROM roles';

    database.query(sql , (error ,results)=>{
        if(error){
            console.error('Error al obtener los roles', error);
            res.status(500).json({error:'error al obtener los roles'})
        }
        res.status(200).json(results)
    })

}