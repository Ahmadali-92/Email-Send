const express = require("express");
const app = express();
const cors = require("cors");
const sendGmail = require("./sendGmail");
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/gmail", sendGmail);

// app.get("/", (req, res) => {
//    const array = [
//     {
//       start: "8:00",
//       end: "9:00",
//     },
//     // {
//     //   start: "9:00",
//     //   end: "10:00",
//     // },
//     // {
//     //   start: "11:00",
//     //   end: "12:00",
//     // },
//   ];

//   function runFunction(array, startingPoint, endingPoint) {
//     for (let i = 0; i < array.length; i++) {
//       const { start, end } = array[i];

//       //not Owerlap
//       if (startingPoint >= start && startingPoint < end) {
//         if (endingPoint >= start && endingPoint <= end) {
//          console.log("1");
//           return true;
//         }
//       }

//       //owerlap
//       if (
//         startingPoint <= start ||
//         (startingPoint >= start && startingPoint < end)
//       ) {
//         if (endingPoint >= end || endingPoint <= end) {
//           console.log("2");
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   const notOwerlap = runFunction(array, "8:15", "9:15");
//   if (notOwerlap) {
//     console.log(notOwerlap);
//   } else {
//     console.log(notOwerlap);
//   }
// });

// app.get("/", (req, res) => {
//   const array = [{ start: "8:00", end: "9:00" }];

//   function checkOverlap(array, starting, ending) {
//     for (let i = 0; i < array.length; i++) {
//       const { start, end } = array[i];

//       if (ending >= start && starting <= end) {
//         console.log("overlap detected");
//         return true;
//       }
//     }
//     console.log("No overlap detected");
//     return false;
//   }

//   const overlap = checkOverlap(array, "7:15", "9:30");
//   if (overlap) {
//     console.log(overlap);
//   } else {
//     console.log(overlap);
//   }
// });

app.listen(PORT, () => {
  console.log("Connected successfully");
});
