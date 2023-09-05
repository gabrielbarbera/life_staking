$(document).ready(function() {

    /* chart.js chart examples */

    // chart colors
    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* 3 donut charts */
    var donutOptions = {
        cutoutPercentage: 85,
        legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
    };

    // donut 1
    var chDonutData1 = {
        labels: ['Bootstrap', 'Popper', 'Other'],
        datasets: [{
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [74, 11, 40]
        }]
    };

    var chDonut1 = document.getElementById("chDonut1");
    if (chDonut1) {
        new Chart(chDonut1, {
            type: 'pie',
            data: chDonutData1,
            options: donutOptions
        });
    }

    // donut 2
    var chDonutData2 = {
        labels: ['Wips', 'Pops', 'Dags'],
        datasets: [{
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [40, 45, 30]
        }]
    };
    var chDonut2 = document.getElementById("chDonut2");
    if (chDonut2) {
        new Chart(chDonut2, {
            type: 'pie',
            data: chDonutData2,
            options: donutOptions
        });
    }

    // donut 3
    var chDonutData3 = {
        labels: ['Angular', 'React', 'Other'],
        datasets: [{
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [21, 45, 55, 33]
        }]
    };
    var chDonut3 = document.getElementById("chDonut3");
    if (chDonut3) {
        new Chart(chDonut3, {
            type: 'pie',
            data: chDonutData3,
            options: donutOptions
        });
    }

    $('#life_staking_table').DataTable({
      paging: false,
      searching: false,
    ordering:  false,
    bInfo:  false,
    select: false

    });


    // new DataTable('#life_staking_table', {
    //     responsive: {
    //         details: {
    //             display: DataTable.Responsive.display.modal({
    //                 header: function (row) {
    //                     var data = row.data();
    //                     return 'Details for ' + data[0] + ' ' + data[1];
    //                 }
    //             }),
    //             renderer: DataTable.Responsive.renderer.tableAll({
    //                 tableClass: 'table'
    //             })
    //         }
    //     }
    // });

});