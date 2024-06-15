document.addEventListener("DOMContentLoaded", function() {
    const csvFilePath = "/static/data/2016-2023dataa.csv";

    const instituteSelect = document.getElementById("institute-select");
    const programSelect = document.getElementById("program-select");
    const seatTypeSelect = document.getElementById("seat-type-select");
    const chartContainer = document.getElementById("chart");
    if (!instituteSelect || !programSelect || !seatTypeSelect || !chartContainer) {
        console.error("Required HTML elements are missing");
        return;
    }

    d3.csv(csvFilePath).then(function(data) {
        // Populate Institute options
        const institutes = Array.from(new Set(data.map(d => d.Institutes)));
        institutes.forEach(function(institute) {
            const option = document.createElement("option");
            option.value = institute;
            option.textContent = institute;
            instituteSelect.appendChild(option);
        });

        // Populate Program options
        const programs = Array.from(new Set(data.map(d => d.Academic_Program)));
        programs.forEach(function(program) {
            const option = document.createElement("option");
            option.value = program;
            option.textContent = program;
            programSelect.appendChild(option);
        });

        // Populate Seat Type options
        const seatTypes = Array.from(new Set(data.map(d => d.Seat_Type)));
        seatTypes.forEach(function(seatType) {
            const option = document.createElement("option");
            option.value = seatType;
            option.textContent = seatType;
            seatTypeSelect.appendChild(option);
        });

        // Update chart based on selection
        updateChart();

        instituteSelect.addEventListener("change", updateChart);
        programSelect.addEventListener("change", updateChart);
        seatTypeSelect.addEventListener("change", updateChart);
    }).catch(function(error) {
        console.error("Error loading CSV file:", error);
    });

    function updateChart() {
        const institute = document.getElementById("institute-select").value;
        const program = document.getElementById("program-select").value;
        const seatType = document.getElementById("seat-type-select").value;
    
        d3.csv(csvFilePath).then(function(data) {
            const filteredData = data.filter(d => 
                d.Institutes === institute && 
                d.Academic_Program === program && 
                d.Seat_Type === seatType
            );
    
            const years = Array.from(new Set(filteredData.map(d => d.Year)));
            const rounds = Array.from(new Set(filteredData.map(d => d.Round)));
    
            const chartData = rounds.map(round => {
                let entry = { round: `Round ${round}` };
                years.forEach(year => {
                    const yearData = filteredData.find(d => d.Round == round && d.Year == year);
                    if (yearData) {
                        entry[`year${year}`] = +yearData["Closing Rank"];
                    }
                });
                return entry;
            });
    
            const svg = d3.select(chartContainer).html("").append("svg")
                .attr("width", "100%")
                .attr("height", "500");
    
            const margin = { top: 20, right: 200, bottom: 30, left: 40 };
            const width = parseInt(svg.style("width")) - margin.left - margin.right;
            const height = parseInt(svg.style("height")) - margin.top - margin.bottom;
    
            const x = d3.scalePoint()
                .domain(chartData.map(d => d.round))
                .range([0, width]);
    
            const y = d3.scaleLinear()
                .domain([d3.min(chartData, d => d3.min(years, year => d[`year${year}`])), d3.max(chartData, d => d3.max(years, year => d[`year${year}`]))])
                .range([height, 0]);
    
            const color = d3.scaleOrdinal()
                .domain(years.map(year => `year${year}`))
                .range(["#00ff00", "#b3ff00", "#ff0000", "#a52a2a", "#0000ff", "#008000", "#ffff00"]);
    
            const line = d3.line()
                .x(d => x(d.round))
                .y(d => y(d.value));
    
            svg.append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)
                .call(d3.axisLeft(y));
    
            svg.append("g")
                .attr("transform", `translate(${margin.left},${height + margin.top})`)
                .call(d3.axisBottom(x));
    
            const lines = svg.append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);
    
            years.forEach(year => {
                lines.append("path")
                    .datum(chartData.map(d => ({ round: d.round, value: d[`year${year}`] })))
                    .attr("fill", "none")
                    .attr("stroke", color(`year${year}`))
                    .attr("stroke-width", 2)
                    .attr("d", line);
            });
    
            // Draw legend
            const legend = svg.append("g")
                .attr("class", "legend")
                .attr("transform", `translate(${width + margin.left + 10},${margin.top})`);
    
            years.forEach((year, i) => {
                const legendItem = legend.append("g")
                    .attr("class", "legend-item")
                    .attr("transform", `translate(0, ${i * 20})`);
    
                legendItem.append("rect")
                    .style("fill", color(`year${year}`));
    
                legendItem.append("text")
                    .attr("x", 20)
                    .attr("y", 12)
                    .text(`Closing Rank - ${year}`);
            });
        }).catch(function(error) {
            console.error("Error updating chart:", error);
        });
    }
    
    
});
