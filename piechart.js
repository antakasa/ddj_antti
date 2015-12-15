
window.onload = function () {
        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

            "#fee0d2",
            "#fcbba1",
            "#fc9272",
            "#fb6a4a",
            "#ef3b2c",
            "#cb181d",
            "#a50f15",
            "#67000d"
               
                ]);
    var chart = new CanvasJS.Chart("chartContainer",

    {
 backgroundColor: "#000",
colorSet: "greenShades",
                animationEnabled: true,


        data: [

        {        

            
            indexLabelFontSize: 20,

            indexLabelFontFamily: "arial",       

            indexLabelFontColor: "red", 

            indexLabelLineColor: "white",        

            indexLabelPlacement: "outside",

            type: "pie",       

            showInLegend: false,

            toolTipContent: "{indexLabel} - {y} - <strong>#percent%</strong>",

            dataPoints: [
                {  y: 5, indexLabel: "Assault on a female aged over 13 by penetration"},

                {  y: 7, exploded: true, indexLabel: "Rape" },

                {  y: 10, indexLabel: "Sexual assault on a female under 13" },

                {  y: 10 , indexLabel: "Sexual assault on a  male aged 13 and over"},

                {  y: 12 , indexLabel: "Others"},

                {  y: 73, indexLabel: "Exposure" },

                {  y: 190, indexLabel: "Committing an act outraging public decency"  },

                {  y: 526 , indexLabel: "Sexual assault on a female aged 13 or over"},

           
        ]
            

        }

        ]

    });

 chart.render();
}