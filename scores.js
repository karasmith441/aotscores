function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XI", dash=false);
	setScoreMultiplier(4, 5);
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	
	setTeamScores("Team Name", []);
	setTeamScores("Test Team 1", [0, 0, 0, 0, 2, +10]);
	setTeamScores("Test Team 2", [0, 0, 0, 2, 0, "-0"]);
	setTeamScores("Test Team 3", [0, 0, 0, 0, 0, -10]);
	setTeamScores("Test Team 4", [1, 1, 3, 4, 2, +0]);
}
