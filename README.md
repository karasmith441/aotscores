# AoTScores
Scoreboard for Astronomy on Tap Las Vegas.

## Basic Usage

This is a Github Pages website that displays the scoreboard for Astronomy on Tap Las Vegas.  The scoreboard is modified using the file `scores.js`. You can use the following functions to modify the scoreboard but calling them in the `scoreboard()` function of `scores.js`.

**setTitle(title)** - This function takes in a string (e.g. "Space is Cool") and set the title of the scoreboard to `Astronomy on Tap - {title}`

**addTeam(team_name, scores)** - This function takes a string and a list of numbers (e.g. [1,2,3]). This adds a row for the specified team with the given scores. *Note: scores will be automatically padded so you don't need to add any extra 0's on the end; if it's round 3, your scores lists should just be 3 entries long.*

The order in which you call the functions doesn't matter, the `main.js` will take care of ordering everything properly, but this is javascript so remember **semi-colons at the end of EVERY SINGLE LINE.** Here is an example of how `scores.js` might look after Half-Time:

```
function scoreboard(){
	
	setTitle("Where in the Universe is A'Tuin Going?");

	addTeam("San Holo", [40,40,50]);
	addTeam("KHAAAAAAN!", [50,20,30]);
	addTeam("Major Tom", [50,50,40]);
	addTeam("Zargothrax", [40,40,30]);
}
```

If a team comes in late, just give them 0's for any rounds before they started answering questions (e.g. addTeam("Late Birds get No Worms", [0,0,50]);).