/**
 * @return {string}
 */
function Season()
{
    //capture a score fromHTML
    var temp = Number(document.TempBug.Temp.value);
    if (temp >= 80 )
    {
        return 'Summer';
    }
    else if (temp >= 70 && temp <= 79 )
    {
        return 'Fall';
    }
    else if (temp <= 35)
    {
        return 'Winter';
    }
    else if (temp >= 36 <= 69)
    {
        return 'Spring';
    }

}


/**
 * @return {string}
 */
function Caloriesburned()

{
    var sport = document.Calories.sport.value;
    var sport = sport.toLowerCase();

    if (sport === 'mls')
    {
        return '1,300';
    }
    else if (sport === 'nba')
    {
        return '765';
    }
    else if (sport === 'nfl')
    {
        return '7,200';
    }
    else if (sport === 'pga')
    {
        return '300';
    }
    else if(sport === 'mlb')
    {
        return '1,400';
    }
}


function assignGrade()
{
    //catpture a score fromHTML
    var Grade = Number(document.project3.Grade.value);
    if (Grade >= 90 )
    {
        return 'A';
    }
    else if (Grade >= 80 )
    {
        return 'B';
    }
    else if (Grade >= 70)
    {
        return 'C';
    }
    else if (Grade >= 60)
    {
        return 'D';
    }
    else if (Grade >= 50)
    {
        return 'F';
    }

}


