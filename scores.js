function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XII", dash=false);
	
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 

	//setTeamScores("Team Name", []);
	
	setTeamScores("Big Badda Boom", [2]);
	setTeamScores("Flat Earthers", [2]);
	setTeamScores("Kepler's Garter Belt", [3]);
	setTeamScores("Leads Lab", [3]);
	setTeamScores("Q", [2]);
	setTeamScores("Sportaco", [0]);
	setTeamScores("Staiden", [3]);
}
