const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now(),
    },

    exercise: [{

        name: {
            type: String,
            trim: true,
            required: "String is Required"
        },

        type: {
            type: String,
            trim: true,
            required: "String is Required"
        },

        weight: {
            type: Number
        },

        sets: {
            type: Number
        },

        reps: {
            type: Number
        },

        duration: {
            type: Number
        },

        distance: {
            type: Number
        }
    },
    ]
},
    {
        toJSON: {
            virtuals: true
        }

    });

WorkoutSchema.virtual("totalDurantion").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
