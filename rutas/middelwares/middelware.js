
function validacionbody (req, res, nex) {
    const {body} = req;
    let bool = true;
    const array = ["Nombre","Dess","estado"]
    if(req.method == "POST"){ 
        for (let i = 0; i < 3; i++) {
            if (!Object.hasOwnProperty.call(body, array[i])) bool = false;
        }
        for (const key in body) {
            for (let i = 0; i < array.length; i++) {
                const propiedad = array.find( elemen => elemen == key) 
                if (!propiedad) {
                    bool = false;                    
                }
            }
                
        }
    }
    if(req.method == "PUT"){
        for (const key in body) {
            for (let i = 0; i < array.length; i++) {
                const propiedad = array.find( elemen => elemen == key) 
                if (!propiedad) {
                    bool = false;                    
                }
            }
                
        }
        }
    if(!bool){
        res.send("the body is null");
        return       
    }
    nex();
}
function validacionPeticion(req, res, nex) {
    const {method} = req

    console.log(method);

    if (method === 'POST'|| method === 'GET'|| method === 'PUT' || method === 'DELETE') {
        nex();
    }else{
        res.send("metodo not found");
        return;
    }

}
function  validarParametros (req , res , nex) {
    const {params} = req;


    if (params.propiedad) {
        const {propiedad}= params;
        if(propiedad == 'completadas'|| propiedad == 'incompletas'){
            return nex();
        }else{
            return res.send("parametro propiedad invalido debe ser completadas o incompletas")
        }
    }
    if (params.id) {
        return nex();      
    }else{
        return res.send('parametro null')
    }

}
function validarurl(req, res , nex) {
    const {originalUrl} = req;
    const array = originalUrl.split('/');

    if (array[1] == 'app' && array[2]=='tareas') {
        return nex();
    }else if(array[1] == 'app' && array[2]=='users'){
        return nex();
    }else if(array[1] == 'app' && array[2]=='tareasbyId'){
        return nex();

    }else{
        res.send("la url es inbalida");

    }
}

module.exports = {validacionbody , validacionPeticion ,validarParametros, validarurl}