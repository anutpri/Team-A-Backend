import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    activityName: { type: String, required: true },
    description: { type: String },
    username: { type: String, required: true, ref:"user"},
    activityType: { type: String, enum: ['Running', 'Walking', 'Bike cycling', 'Weight training', 'Dancing'], required: true},
    distance: { type: Number }, 
    durationTime: { type: Number, required: true, min: 10 },
    startDateTime: { type: Date, required: true },
    finishDateTime: { type: Date, required: true },
    fullname: { type: String, ref:"user" },
  }
    );

  const activityModel = mongoose.model('activity', activitySchema);

  export default activityModel;