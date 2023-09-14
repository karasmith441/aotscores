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

**setTitle(title)** - Takes a string (e.g. "Space is Cool") and sets the title of the scoreboard to `Astronomy on Tap - {title}`

**addTeam(team_name, scores)** - Takes a string and a list of numbers (e.g. "Rocket Man", [10,20,30]). This adds a row for the specified team with the given scores. *Note: rows will be automatically padded to fill the number of rounds, so you don't need to add any extra 0's on the end of the list; e.g. if it's round 3, your scores lists should just be 3 entries long.*

The order in which you call the functions doesn't matter,`main.js` takes care of ordering everything properly, but this is javascript so remember **semi-colons after EVERY command.** Here is an example of how `scores.js` might look after Half-Time:

```
function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("Where in the Universe is A'Tuin Going?");

	addTeam("San Holo",        [40,30,50]);
	addTeam("KHAAAAAAN!",      [50,20,30]);
	addTeam("Major Tom",       [50,50,40]);
	addTeam("Zargothrax",      [40,40,30]);
	addTeam("Cosmic Brownies", [30,50,30]);
	addTeam("Ford Prefect",    [20,50,50]);
}
```

If a team comes in late, just give them 0's for any rounds before they started answering questions, e.g. addTeam("Late Birds Get No Worms", [0,0,50]);
