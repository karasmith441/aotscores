function scoreboard(){
	
	setBackground("bg/hubble_ultra_deep_field.jpg");
	setTitle("XII", dash=false);
	
	// For round 4 (name that tune) award 3 points for correct title and 1 point for correct artist
	setScoreMultiplier(4, 5); 

	//setTeamScores("Team Name", []);
	
	setTeamScores("San Holo",        [4,3,5]);
	setTeamScores("KHAAAAAAN!",      [5,2,3]);
	setTeamScores("Major Tom",       [5,5,4]);
	setTeamScores("Zargothrax",      [4,4,3]);
	setTeamScores("Cosmic Brownies", [3,5,3]);
	setTeamScores("Ford Prefect",    [2,5,5]);
}
