let rowObject=[];
(
    async()=>{
        let workbook = XLSX.read(await(await fetch("./class.xlsx")).arrayBuffer());
            console.log(workbook);
        let i=0;
        workbook.SheetNames.forEach(sheet => {
            rowObject.push(XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]));
        });
    
//
let arr1 = Object.values(rowObject[0][0]);
let arr2 = Object.values(rowObject[0][1]);
let arr3 = Object.values(rowObject[0][2]);
let arr4 = Object.values(rowObject[0][3]);

let nm1 = document.getElementById("nm1");
nm1.innerHTML = rowObject[0][0].NAME;
let nm2 = document.getElementById("nm2");
nm2.innerHTML = rowObject[0][1].NAME;
let nm3 = document.getElementById("nm3");
nm3.innerHTML = rowObject[0][2].NAME;
let nm4 = document.getElementById("nm4");
nm4.innerHTML = rowObject[0][3].NAME;

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");

p1.innerHTML = arr1.filter(x => x == 'P').length;
p2.innerHTML = arr2.filter(x => x == 'P').length;
p3.innerHTML = arr3.filter(x => x == 'P').length;
p4.innerHTML = arr4.filter(x => x == 'P').length;

a1.innerHTML = arr1.filter(x => x == 'A').length;
a2.innerHTML = arr2.filter(x => x == 'A').length;
a3.innerHTML = arr3.filter(x => x == 'A').length;
a4.innerHTML = arr4.filter(x => x == 'A').length;

const chartData1 ={
    labels: ["Present","Absent"],
    data: [arr1.filter(x => x == 'P').length,arr1.filter(x => x == 'A').length],
};
const chartData2 ={
    labels: ["Present","Absent"],
    data: [arr2.filter(x => x == 'P').length,arr2.filter(x => x == 'A').length],
};
const chartData3 ={
    labels: ["Present","Absent"],
    data: [arr3.filter(x => x == 'P').length,arr3.filter(x => x == 'A').length],
};
const chartData4 ={
    labels: ["Present","Absent"],
    data: [arr4.filter(x => x == 'P').length,arr4.filter(x => x == 'A').length],
};

const myChart1 = document.querySelector(".my-chart-1");

new Chart(myChart1, {
    type: "doughnut",
    data:{
        labels: chartData1.labels,
    datasets: [
        {label:"   Attendance",
        data: chartData1.data,},
    ],
},
options:{
    borderWidth:10,
    borderRadius:2,
    hoverBorderWidth:0,
    plugins:{
        legend:{
            display: false
        }
    },
},
});

const myChart2 = document.querySelector(".my-chart-2");

new Chart(myChart2, {
    type: "doughnut",
    data:{
        labels: chartData2.labels,
    datasets: [
        {label:"   Attendance",
        data: chartData2.data,},
    ],
},
options:{
    borderWidth:10,
    borderRadius:2,
    hoverBorderWidth:0,
    plugins:{
        legend:{
            display: false
        }
    }
},
});

const myChart3 = document.querySelector(".my-chart-3");

new Chart(myChart3, {
    type: "doughnut",
    data:{
        labels: chartData3.labels,
    datasets: [
        {label:"   Attendance",
        data: chartData3.data,},
    ],
},
options:{
    borderWidth:10,
    borderRadius:2,
    hoverBorderWidth:0,
    plugins:{
        legend:{
            display: false
        }
    }
},
});

const myChart4 = document.querySelector(".my-chart-4");

new Chart(myChart4, {
    type: "doughnut",
    data:{
        labels: chartData4.labels,
    datasets: [
        {label:"   Attendance",
        data: chartData4.data,},
    ],
},
options:{
    borderWidth:10,
    borderRadius:2,
    hoverBorderWidth:0,
    plugins:{
        legend:{
            display: false
        }
    }
},
});
}
)()