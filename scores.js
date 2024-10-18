function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XII", dash=false);
	
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 

	//setTeamScores("Team Name", []);
	
	setTeamScores("Big Badda Boom",       [2, 3, 4, 0,  4]);
	setTeamScores("Flat Earthers", 	      [2, 3, 3, 3, 10]);
	setTeamScores("Kepler's Garter Belt", [3, 3, 3, 2, 16]);
	setTeamScores("Leads Lab", 	      [3, 4, 4, 3, 16]);
	setTeamScores("Q", 		      [2, 5, 4, 4, 13]);
	setTeamScores("Sportaco", 	      [0, 2, 2, 1,  5]);
	setTeamScores("Stayden", 	      [3, 5, 4, 4,  5]);
}
