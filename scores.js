function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XI", dash=false);

	// For round 2 ("Matt Brady Questions") award 1 additional point to everyone for each of Matt's correct answers
	setScoreMultiplier(1, 10);
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 
	
	//setTeamScores("Team Name", []);
	setTeamScores("Bio is Better", [1]);
	setTeamScores("Rachel's Favorites", [1]);
	setTeamScores("Pigeons", [1]);
	setTeamScores("Blue Cruise Crew", [2]);
	setTeamScores("Lord Taco", [3]);
	setTeamScores("LV Away Team", [3]);
	setTeamScores("Apes of Wrath", [4]);
	setTeamScores("Solar Eclipse of the Heart", [1]);
	setTeamScores("RMA Per Ant C.", [1]);
	setTeamScores("Space Monkey Mafia", [1]);
	setTeamScores("Subie", [3]);
	setTeamScores("Nebulator", [3]);
	setTeamScores("The Binary Stars", [2]);
}
