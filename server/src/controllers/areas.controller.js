import connection from "../db";

export function MostrarArea(req,res){
    const sql = 'SELECT * FROM areas';

    connection.query(sql , (err , results) => {
        if(error){
            console.error(' Estamos presentando un error al encontrar el area', error);
            res.status(500).json({error:'Estamos presentando un error al encontrar el area'})
        }
        res.status(200).json(results)
    })
}