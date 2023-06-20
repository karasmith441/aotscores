'''
This Python script writes an HTML file to display
the scores for Astronomy on Tap. The number of
questions per round can be adjusted.

During the event, each team gets its own array in the
scores variable. Once the scores are filled in, the
script fills in the appropriate HTML table, which can
be displayed with a web browser.
'''

'''
---------------------------------------------------------------------
TO DO:
| | Allow the number of entries in the team arrays to be any size, while
adjusting the number of rounds, i.e. separate the round and team counters
|X| Use a file input instead of opening the code?
|X| Add color shading for final question
| | Transpose teams/scores
   >---| | Append totalscores to the end of each team's score list. Completes the transpose rows.
| | Rearrange shading - use col and colgroup tags
| | Use star pictures as score markers???
| | Sticky title
| | auto-update control?

---------------------------------------------------------------------
'''

N = 2                       # Number of questions in a round
roundlength = 2*(N+1)       # Length of a round, including labels
indent = ' '*2              # Size of the indent
finale = True               # If True, the Final Scores row will be colored.
scfile = "scores.txt"       # txt file to read the scores from.

# Team names and scores. Fill in with teams and scores from each event.
# <sub>, <sup>, &Greek, &#Unicode/Emoji;

# Add the HTML header.
def Header():
    data.write("<!DOCTYPE html>\n")
    data.write("<html>\n")
    data.write("<head>\n")
    data.write(indent+"<meta charset=\"utf-8\" />\n")
    data.write(indent+"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n")
    data.write(indent+"<title>Astronomy on Tap Scoreboard</title>\n")
    data.write(indent+"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n")
    data.write(indent+"<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"main.css\" />\n")
    data.write(indent+"<script src=\"main.js\"></script>\n")
    data.write("</head>\n")


# Read scores from a written file. Team names and scores are separated by a length of 5 asterisks.
def ReadScores():

    event_title = ''

    scorelist = []
    totalscores = []
    with open(scfile, 'r') as data:
        event_title = data.readline()
        for line in data:
            # Separate the team names and scores and convert the scores into numbers.
            l = line.split('*****') # Unique separator for teams and scores
            sc = [int(s) for s in l[-1].split()]
            
            # Record the team name and numeric scores in one array, and append the result to a list of arrays called scorelist.
            # Additionally, record the running total for each team and append it to the end of their score list.
            totalscores.append(sum(sc))
            scorelist.append([l[0]]+sc)
            scorelist[-1].append(totalscores[-1])
            # Using insertion sort, reorder the teams by descending total score.
            # A third variable is required for swap function since arrays are the objects being swapped.
            for i in range(len(totalscores)-1, 0, -1):
                if totalscores[i] > totalscores[i-1]:
                    # Swap total scores
                    scoreswp = totalscores[i]
                    totalscores[i] = totalscores[i-1]
                    totalscores[i-1] = scoreswp
                    # Swap teams
                    teamswp = scorelist[i]
                    scorelist[i] = scorelist[i-1]
                    scorelist[i-1] = teamswp

    print()
    print("Event:", event_title)
    print(totalscores)
    #for i in range(len(totalscores)):
    #    s = totalscores[i]
    #    teamorder.append(totalscores.index(s, i))
    #print(teamorder)
    
    #print([teamorder.index(i) for i in teamorder])
    #Swaptest
    #c = scorelist[0]
    #scorelist[0] = scorelist[-1]
    #scorelist[-1] = c
    print(scorelist)

    return event_title, scorelist

# Write the scores for individual rounds in HTML
def WriteScores(scores):
    # For each team+score list
    for i in range(len(scores[0])+3):

        # Strings for the opening tags, table row, and closing tags.
        ot = 2*indent+"<tr>\n"
        row = 3*indent
        ct = '\n'+2*indent+"</tr>\n"

        # Cell opening and closing tags, using table headers and data cells.
        cell_ot = "<td>" if i!=0 else "<th>"
        cell_ct = "</td>" if i!=0 else "</th>"

        # Variable to set the question number, set to i%(1+N_questions).
        # Change this if the number of questions per round is different.
        qnum = i-i//(N+1)
        qlabel = "Round"+(' '+str(qnum) if i!=0 else '')

        # Add special labels for the halftime and final questions.
        if i == roundlength/2:
            qlabel = "Halftime"
            ot = ot.replace("<tr>", "<tr class=\"bigquestion\">")
        elif i == roundlength:
            # Check here if scores[j][i] is negative; add CSS class with red color?
            qlabel = "Final"
            #if scores[j][i] < 0:
                #print("NEGATIVE", i, j)
            ot = ot.replace("<tr>", "<tr class=\"bigquestion\">")
        elif i == roundlength+1:
            qlabel = "Halftime Totals"
            ot = ot.replace("<tr>", "<tr class=\"summary\">")
            ot = 2*indent+"<tr><td><br></td></tr>\n" + ot
        elif i == roundlength+2:
            qlabel = "Pre-Final Scores"
            ot = ot.replace("tr", "tr class=\"summary\"")
        elif i == roundlength+3:
            qlabel = "Final Scores"
            ot = ot.replace("tr", "tr class=\"final summary\"")

        # Add question number to the HTML
        ot += 3*indent+cell_ot+qlabel+cell_ct+"\n"
        
        # Write the scores for each round.
        for j in range(len(scores)):
            # Scores on the Final
            if i == roundlength:
                if scores[j][i] < 0:
                    cell_missed = "<td class=\"missed\">"
                    row += cell_missed+str(scores[j][i])+cell_ct
            #        print("NEGATIVE", i, j, cell_ot)
                else:
                    row += cell_ot+str(scores[j][i])+cell_ct
                continue
                    #cell_ot = cell_ot.replace("td", "td class=\" missed\"")
            # Halftime Totals
            if i == roundlength+1:
                row += cell_ot+str(sum(scores[j][1:N+2]))+cell_ct
            # Prefinal Totals
            elif i == roundlength+2:
                row += cell_ot+str(sum(scores[j][1:-1]))+cell_ct
            # Final Totals
            elif i == roundlength+3:
                fscore = sum(scores[j][1:])
                # Color the final scores for the finale.
                if (finale):
                    cell_ot = Podium(scores, fscore)
                row += cell_ot+str(fscore)+cell_ct
            # Scores for round i
            else:
                row += cell_ot+str(scores[j][i])+cell_ct

        data.write(ot+row+ct)

# Write the scores for individual rounds in HTML
def WriteScoresHoriz(scores):
    # First, write the top row into the HTML file. These are the labels for each column.
    toprow = 3*indent+"<tr> <th>Team</th><th>R1</th><th>R2</th><th>HT</th><th>R3</th><th>R4</th><th>Final</th><th>Score</th> </tr>\n"
    data.write(toprow)
    # For each team in the list
    for i in range(len(scores)):
        # HTML strings for the table row tags and indent. Must be refreshed each row.
        ot = 2*indent+"<tr>\n"
        row = 3*indent
        ct = '\n'+2*indent+"</tr>\n"        
        # For each score in a team's list,
        for j in range(len(scores[i])):
            # Table cell opening and closing tags. Must be refreshed each cell.
            cell_ot = "<td>"
            cell_ct = "</td>"
            cell_class = ""
            cell_style = ""

            # --------Formatting checks for cells:------------
            # For teams, left-justify the names
            if (j==0):
                cell_class += " team"
            # Check to see if this column is a big round, i.e. halftime or final.
            if (j == 3 or j == 6):
                cell_class += " bigquestion"
            # Check to see if a team lost points this round. This should only apply to the final round.
            if j == len(scores[i])-2 and scores[i][j] < 0.0:
                cell_class += " missed"
            # Color the final scores by rank
            if (j == len(scores[i])-1):
                totals = [scores[i][-1] for i in range(len(scores))]
                print(totals)
                cell_style += PodiumHoriz(i,scores[i][-1], totals)
                cell_class += " final"

            # Add any cell formatting in style and class elements.
            #cell_ot = cell_ot.replace(">", cell_format+">")
            if cell_class != "":
                cell_ot = cell_ot.replace(">", " class=\"" + cell_class.lstrip() + "\">")
            if cell_style != "":
                cell_ot = cell_ot.replace(">", " style=\"" + cell_style.lstrip() + "\">")
            # Write the score in the round as a table element.
            row += cell_ot+str(scores[i][j])+cell_ct
            #row += "<td{}>".format(cell_format)+str(scores[i][j])+"</td>"
            
        # Once the entire row is written, write the entire row into the table.
        data.write(ot+row+ct)        

# Set <col> and <colgroup> tags for the table.
def SetColumns():
    data.write(2*indent+"<colgroup>\n")
    data.write(3*indent+"<col width=20%>\n")                            # Teams
    data.write(3*indent+"<col span=2>\n")                     # Rounds 1 and 2
    data.write(3*indent+"<col class=\"bigquestion\">\n")      # Halftime
    data.write(3*indent+"<col span=2>\n")                     # Rounds 3 and 4
    data.write(3*indent+"<col class=\"bigquestion\">\n")      # Final
    data.write(3*indent+"<col width=20% class=\"final summary\">\n")    # Current Score
    data.write(2*indent+"</colgroup>\n")

# Colors the final scores for 1st, 2nd, and 3rd place.
def Podium(scores, x):
    finals = [sum(scores[k][1:]) for k in range(len(scores))]
    finals.sort()   # Sort scores. Easy way out for now.

    # Change color for 1st, 2nd, 3rd, and other.
    if (x == finals[-1]):
        return "<td style=\"color:gold\">"
    elif (x == finals[-2]):
        return "<td style=\"color:silver\">"
    elif (x == finals[-3]):
        return "<td style=\"color:chocolate\">"
    else:
        return "<td style=\"color:#fff8e7\">"

# Colors the final scores by place by changing the opening <td> tag.
# Since the scores are already sorted in ReadScores, only a team's position i in the table is needed.
def PodiumHoriz(i,j, totals):

    # 1st Place - Gold
    if (i==0 or j==totals[0]):
        #return "<td style=\"color:gold\">"
        #return " style=\"color:gold\""
        return " color:gold"
    # 2nd Place - Silver
    elif (i==1 or j==totals[1]):
        #return "<td style=\"color:silver\">"
        #return " style=\"color:silver\""
        return " color:silver"
    # 3rd Place - Bronze
    elif (i==2 or j==totals[2]):
        #return "<td style=\"color:chocolate\">"
        #return " style=\"color:chocolate\""
        return " color:chocolate"
    # All Other Places - Cosmic Latte
    else:
        #return "<td style=\"color:#fff8e7\">"
        #return " style=\"color:#fff8e7\""
        return " color:#fff8e7"


event_title, scores = ReadScores()
#------------------------------------------------------------------------
# Write the HTML script.
with open("index.html", 'w') as data:
    
    Header()

    #Set background and text colors, font
    data.write("<body>\n")
    # data.write(indent+"<img src=\"AoTLogo.png\">\n")
    #data.write(indent+"<h1 style=\"font-size:60px; text-align:center\">Astronomy on Tap Scoreboard</h1>\n")
    data.write(indent+"<h1 class=\"eventtitle\">Astronomy on Tap - {}</h1>\n".format(event_title))
    data.write(indent+"<hr>\n")
    data.write(indent+"<div style=\"overflow-x: auto;\">\n")
    data.write(indent+"<table>\n")

    #Fill in the data cells of the table
    SetColumns()
    WriteScoresHoriz(scores)

    data.write(indent+"</table>\n")
    data.write(indent+"</div>\n")
    data.write("</body>\n")
    data.write("</html>")
