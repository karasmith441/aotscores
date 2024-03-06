function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XI", dash=false);

	// For round 2 ("Matt Brady Questions") award 1 additional point to everyone for each of Matt's correct answers
	setScoreMultiplier(1, 10);
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 
	
	//setTeamScores("Team Name", []);
	setTeamScores("Apes of Wrath", 		    [4, 9, 4]);
	setTeamScores("Bio is Better", 		    [1, 5, 3]);
	setTeamScores("Blue Cruise Crew", 	    [2, 5, 3]);
	setTeamScores("Lord Taco", 		    [3, 9, 4]);
	setTeamScores("LV Away Team", 		    [3, 9, 4]);
	setTeamScores("Nebulator", 		    [3, 9, 4]);
	setTeamScores("Pigeons", 		    [1, 7, 4]);
	setTeamScores("Rachel's Favorites", 	    [1, 9, 3]);
	setTeamScores("RMA Per Ant C.", 	    [1, 5]);
	setTeamScores("Solar Eclipse of the Heart", [1, 9, 4]);
	setTeamScores("Space Monkey Mafia", 	    [1, 8, 4]);
	setTeamScores("Subie", 			    [3, 8]);
	setTeamScores("The Binary Stars", 	    [2, 8, 3]);
}
