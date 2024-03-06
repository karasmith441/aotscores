function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XI", dash=false);

	// For round 2 ("Matt Brady Questions") award 1 additional point to everyone for each of Matt's correct answers
	setScoreMultiplier(1, 10);
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 
	
	//setTeamScores("Team Name", []);
	setTeamScores("Test Team", [0]);
}
