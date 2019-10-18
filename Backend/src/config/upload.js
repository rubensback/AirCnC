//CONFIGURAÇÃO DO MULTER

const multer = require('multer');
const path = require('path');


module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'uploads' ), //qual pasta os arquivos serão salvos
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null,`${name}-${Date.now()}${ext}` )
        } //como nome do arquivo vai ser formado
    }) //como multer vai armazenar arquivos e imagens que vai receber da aplicação
} 