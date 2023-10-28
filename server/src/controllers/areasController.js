import database from '../db.js';

export function Areas(req, res){
    const sql = 'SELECT * FROM areas';

    database.query(sql , (error ,results)=>{
        if(error){
            console.error('Error al obtener los areas', error);
            res.status(500).json({error:'error al obtener los areas'})
        }
        res.status(200).json(results)
    })

}