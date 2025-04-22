async function loadCovidData() 
{
    try 
    {
      const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const data = await response.json();
      const states = data.data.regional;
  
      const tableBody = document.getElementById("tableBody");
      states.forEach((state, index) => {
        const totalCases = state.confirmedCasesIndian + state.confirmedCasesForeign;

        const row = `
        <tr>
            <td data-label="S.No">${index + 1}</td>
            <td data-label="State Name">${state.loc}</td>
            <td data-label="Indian Cases">${state.confirmedCasesIndian}</td>
            <td data-label="Foreign Cases">${state.confirmedCasesForeign}</td>
            <td data-label="Discharged">${state.discharged}</td>
            <td data-label="Deaths">${state.deaths}</td>
            <td data-label="Total Cases">${totalCases}</td>
        </tr>
        `;

        tableBody.innerHTML += row;
      });
    } 
    catch (error) 
    {
      console.error("Error fetching data:", error);
    }
  }
  
  loadCovidData();
  