import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    activity_name: { type: String, required: true },
    // description: String,
    // username: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"user"},
    activity_type: { type: String, enum: ['Running', 'Walking', 'Bike cycling', 'Weight training', 'Dancing'], required: true},
    // distance: { type: Number }, duration_time: { type: Number, required: true, min: 10 },
    // start_date_time: { type: Date, required: true },
    // finish_date_time: { type: Date, required: true },
    // fullname: { type: String, ref:"user" },
  }
    );

  const activityModel = mongoose.model('activity', activitySchema);

  export default activityModel;