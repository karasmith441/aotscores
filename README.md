# AoTScores
Scoreboard for Astronomy on Tap Las Vegas.

## Basic Usage

This is a Github Pages website that displays the scoreboard for Astronomy on Tap Las Vegas. In order to make the changes show up on the website, you 

1. Edit scores.js directly on GitHub
2. Commit changes (big green button).
 
You can watch the deployment progress in the `Actions` tab to make sure it deploys smoothly. The site is https://karasmith441.github.io/aotscores/. If you already have it open, it usually needs a hard refresh (ctrl+shift+R) to show the updates.

## Editing scores.js

You can use the following functions to modify the scoreboard by adding them to the `scoreboard()` function in `scores.js`.

**setBackground(path)** - Takes a string path to an image (e.g. "bg/space.png") and sets the background to be that image.

**setTitle(title)** - Takes a string (e.g. "Space is Cool") and sets the title of the scoreboard to `Astronomy on Tap - {title}`. There's an optional parameter if you do not want the dash in the middle add dash=false as a parameter.

**setScoreMultiplier(round, multiplier)** - Takes two numbers, the first is the round number (starting from 0 and counting up, so these *will not* match the name of the round, sorry), the second is the score multiplier for that round. The defaults are 10, 10, 10, 20, 20, and 1 for rounds 0 through 5. This means you just put in the number correct for the first 5, then their wager for the final (+/- depending on if they got it or not), setTeamScores will do the math. You can change the default values by changing the variable RSL in main.js.

**setTeamScores(team_name, scores)** - Takes a string and a list of numbers (e.g. "Rocket Man", [10,20,30]). This makes a row for the specified team with the given scores. Putting "-0" as a number (with the quotes) will make it appear red. This lets you mark the answer as wrong for the final round if the person didn't make a wager. *Note: rows will be automatically padded to fill the number of rounds, so you don't need to add any extra 0's on the end of the list; e.g. if it's the 3rd round (half-time), your scores lists should just be 3 entries long.*

Background, title, and scores can be set in any order, but if you have custom multipliers you **must** call setScoreMultiplier to set those **before** setTeamScores. This is javascript so remember **semi-colons after EVERY command.** Here is an example of how `scores.js` might look after Half-Time:

```
function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("Where in the Universe is A'Tuin Going?");

	setTeamScores("San Holo",        [4,3,5]);
	setTeamScores("KHAAAAAAN!",      [5,2,3]);
	setTeamScores("Major Tom",       [5,5,4]);
	setTeamScores("Zargothrax",      [4,4,3]);
	setTeamScores("Cosmic Brownies", [3,5,3]);
	setTeamScores("Ford Prefect",    [2,5,5]);
}
```

If a team comes in late, just give them 0's for any rounds before they started answering questions, e.g. setTeamScores("Late Birds Get No Worms", [0,0,5]);
