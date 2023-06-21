function makeTitle(event_name)
{
  title = document.getElementById("eventtitle");
  title.innerHTML = "Astronomy on Tap - " + event_name;
}
function addTeam(table, team_name, scores)
{
  var rows = table.rows;
  var col_names = rows[0].getElementsByTagName("TH");
  var cols = col_names.length;
  
  var row = table.insertRow(table.rows.length);
  for(i = 0; i < cols; i++)
  {
    var cell = row.insertCell(i);
    if(i == 0)
    {
      cell.setAttribute("class", "team");
      cell.innerHTML = team_name;
    }
    if(i > 0)
    {
      cell.innerHTML = scores[i-1];
    }
    if(col_names[i].innerHTML === "HT")
    {
      cell.setAttribute("class", "bigquestion");
      cell.innerHTML = scores[i-1];
    }
    if(col_names[i].innerHTML === "Final")
    {
      if(scores[i-1] < 0)
      {
        cell.setAttribute("class", "bigquestion missed");
        cell.innerHTML = scores[i-1];
      }
      else
      {
        cell.setAttribute("class", "bigquestion");
        cell.innerHTML = scores[i-1];
      }
    }
    if(i == cols-1)
    {
      cell.setAttribute("class", "final");
      cell.innerHTML = "";
    }
  }
}

function tableSum(table){
  rows = table.rows;
  for(i = 1; i < rows.length; i++)
  {
  	row = rows[i].getElementsByTagName("TD");
  	var tot = 0;
  	for(j = 1; j < (row.length-1); j++)
  	{
  		tot += Number(row[j].innerHTML);
  	}
  	row[row.length-1].innerHTML = tot;
  }
}

function sortTable(table) {
  var table, rows, switching, i, x, y, shouldSwitch;
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD");
      x = x[x.length-1]
      y = rows[i + 1].getElementsByTagName("TD");
      y = y[y.length-1]
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  var style_count = 0
  var styles = ["color:gold", "color:silver", "color:chocolate", "color:#fff8e7"]
  var totals = []
  first = rows[1].getElementsByTagName("TD");
  first = first[first.length - 1];
  first.style = "color:gold";
  var current = Number(first.innerHTML);
  for(i = 2; i < rows.length; i++)
  {
  	t = rows[i].getElementsByTagName("TD");
  	t = t[t.length - 1];
  	if(Number(t.innerHTML) < current && style_count < 3)
  	{
  		style_count += 1;
  		current = Number(t.innerHTML);
  	}
  	t.style = styles[style_count];
  }
}
table = document.getElementById("mytable");

makeTitle("Journey to the Center of the Earth");
addTeam(table, "Team 1", [5,4,5,0,0,0]);
addTeam(table, "Team 2", [4,4,2,0,0,0]);
addTeam(table, "Team 3", [5,5,3,0,0,0]);
addTeam(table, "Team 4", [2,3,5,0,0,0]);
addTeam(table, "Team 5", [3,1,2,0,0,0]);
tableSum(table);
sortTable(table);
