const Twit = require('twit');
const config = require('../config/twitter');

const T = new Twit(config);

const checkAccountStatus = (req, res) => {
  const { username } = req.params;

  T.get(`users/show`, { screen_name: username }, (err, data, response) => {
    console.log(data.status)
    if (data.status){
        return res.json({ status: 'cuenta activa' })
    }else{
        switch (err.code) {
            case 50:
                return res.json({ status: 'Usuario no encontrado' })
            case 63:
                return res.json({ status: 'Suspendido' });
            default:
                return res.json({ status: 'error en la solicitud' });
        }
    }  
  });
};

module.exports = {
  checkAccountStatus,
};