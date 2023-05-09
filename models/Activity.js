import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity_name: {
        type: String,
        required: true
      },
      description: String,
      username: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
      },
      activity_type: {
        type: String,
        enum: ['Running', 'Walking', 'Bike cycling', 'Weight training', 'Dancing']
      },
      distance: {
        type: Number
      },
      duration_time: {
        type: Number,
        required: true,
        min: 10
      },
      start_date_time: {
        type: Date,
        required: true
      },
      finish_date_time: {
        type: Date,
        required: true
      },
      
    });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;