var dataArray = [5, 10, 18];

var svg = d3.select("body")
                .append('svg')
                .attr('height', '300px')
                .attr('width', '100%');


svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
            .attr('height', (d, i) => d*15)
            .attr('width', '50')
            .attr('fill', 'blue')
            .attr('x', (d, i) => i*65)
            .attr('y', function (d, i) {
                return 300 - d*15;
            });