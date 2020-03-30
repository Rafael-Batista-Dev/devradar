const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { longitude, latitude, techs } = request.query;
    const techArray = parseStringAsArray(techs);

    //Filtragem por tecnologia e distancia
    const devs = await Dev.find({
      techs: {
        $in: techArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    //Buscar todos os devs num raio  10km
    //Filtro por tecnologia
    return response.json({ devs });
  }
};
