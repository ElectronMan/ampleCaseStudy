import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  address: {
    type: String
  },
  name: {
    type: String
  }
});

const Shelter = mongoose.model('Shelter', schema);
export default Shelter;