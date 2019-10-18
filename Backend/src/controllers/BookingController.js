const Booking = require('../models/Booking');

module.exports = {
    async store(req,res){
        const {user_id} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        await booking.populate('user').populate('spot').execPopulate(); //traz todas as informações de user e de spot, ao inves de só o id

        return res.json(booking);
    }
}