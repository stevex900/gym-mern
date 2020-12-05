// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "Adam",
      email: "admin@o2.pl",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      viewTraining: {
        number: 8,
        viewCurrentWorkout: [
          {
            id: 10,
            exerciseName: "Plecy",
            exercise: [
              { series: 1, repetitions: "12", weight: "8" },
              { series: 2, repetitions: "12", weight: "8" },
              { series: 3, repetitions: "12", weight: "8" },
            ],
          },
        ],
      },
      historyTraining: {
        number: 8,
        allTrainingsHistory: [
          {
            id: 3,
            date: "19.11.2020",
            history: [
              {
                id: 9,
                exerviseName: "Klata",
                exercise: [
                  {
                    series: 1,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                  {
                    series: 2,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            date: "19.11.2020",
            history: [
              {
                id: 9,
                exerviseName: "Plecy",
                exercise: [
                  {
                    series: 1,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                  {
                    series: 2,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                ],
              },
            ],
          },
        ],
      },
      exercisesName: {
        chest: ["test1", "test1.2", "test1.3"],
        back: ["test2", "test2.2", "test2.3"],
        legs: ["test3", "test3.2", "test3.3"],
        shoulders: ["test4", "test4.2", "test4.3"],
        biceps: ["test5", "test5.2", "test5.3"],
        triceps: ["test6", "test6.2", "test6.3"],
        abdomen: ["test7", "test7.2", "test7.3"],
        other: ["test8", "test8.2", "test8.3"],
      },
    },
    {
      name: "John",
      email: "user@o2.pl",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
      viewTraining: {
        number: 8,
        viewCurrentWorkout: [
          {
            id: 10,
            exerciseName: "Biceps",
            exercise: [
              { series: 1, repetitions: "12", weight: "8" },
              { series: 1, repetitions: "12", weight: "8" },
              { series: 1, repetitions: "12", weight: "8" },
            ],
          },
        ],
      },
      historyTraining: {
        number: 8,
        allTrainingsHistory: [
          {
            id: 3,
            date: "19.11.2020",
            history: [
              {
                id: 9,
                exerviseName: "Triceps",
                exercise: [
                  {
                    series: 1,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                  {
                    series: 2,
                    repetitions: "5",
                    weight: "3",
                    myRepetitions: "2",
                    myWeight: "4",
                  },
                ],
              },
            ],
          },
        ],
      },
      exercisesName: {
        chest: ["test1"],
        back: ["test2"],
        legs: ["test3"],
        shoulders: ["test4"],
        biceps: ["test5"],
        triceps: ["test6"],
        abdomen: ["test7"],
        other: ["test8"],
      },
    },
  ],
};
// export default data;
module.exports = data;
