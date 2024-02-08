var RSL = [10,10,10,20,20,1];

function setTitle(event_name)
{
  title = document.getElementById("eventtitle");
  title.innerHTML = "Astronomy on Tap - " + event_name;
}

function setBackground(url)
{
  url_cast_str = "url(" + url + ")";
  document.body.style.backgroundImage = url_cast_str;
}

function setRoundScores(i, round_scoring)
{
  while(RSL.length <= i)
  {
    RSL.push(1);
  }
  RSL[i] = round_scoring;
}

function setTeamScores(team_name, scores)
{
  table = document.getElementById("mytable");
  var rows = table.rows;
  var col_names = rows[0].getElementsByTagName("TH");
  var cols = col_names.length;
  
  while(scores.length < cols)
  {
    scores.push(0);
  }

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
      cell.innerHTML = RSL[i-1]*scores[i-1];
      if(Number(cell.innerHTML) < 0)
      {
        cell.style = "color:crimson";
      }
      
      if(cell.innerHTML === "-0")
      {
        cell.style = "color:crimson";
      }
    }
    if(i == cols-1)
    {
      cell.setAttribute("class", "final");
    }
  }
}

function tableSum(){
  table = document.getElementById("mytable");
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

function sortTable() {

  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
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

scoreboard();
tableSum();
sortTable();
