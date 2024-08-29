/* Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

function points(games) {
    const goalArr = games.map((score) => {
      return [Number(score[0]), Number(score[2])];
    });
    const ptsArr = goalArr.map(([score1, score2]) => {
      if (score1 < score2) {
        return 0;
      } else if (score1 > score2) {
        return 3;
      } else {
        return 1;
      }
    })
    return ptsArr.reduce((sum, pts) => sum + pts, 0);
}