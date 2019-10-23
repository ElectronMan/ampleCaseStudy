import ShelterRepository from '../models/repositories/ShelterRepository';

function createShelter(req, res) {
  const shelter = req.body;

  ShelterRepository.create(shelter)
    .then((newShelter) => {
      res.json(newShelter);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
}

function getShelters(req, res) {
  ShelterRepository.get()
    .then((shelters) => {
      res.json(shelters);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
}

export default { createShelter, getShelters };