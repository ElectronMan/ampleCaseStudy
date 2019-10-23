import Shelter from '../Shelter';

class ShelterRepository {

  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }

  get() {
    return this.model.find({}, function(err, users) {
      if (err) {
        throw err;
      }
      return users
    })
  }

  deleteAll() {
    return this.model.deleteMany({}, (err) => {
      if (err) {
        throw err;
      }
    })
  }
}

export default new ShelterRepository(Shelter);