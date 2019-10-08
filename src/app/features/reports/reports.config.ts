export const reportConfig = {
    shade:{ flag:'',style: 'hidden' },
    sortlist:[
        {name:'Date', checked :false},
        {name:'English', checked :true},
        {name: 'Chinese', checked :false }
    ],
    exportList:[
        {name:'PDF'},
        {name:'Email'}
    ],
    navigation:[
        {
            text:"Week",
            style:"border-color",
            period:false
        },
        {
            text:"Month",
            style:"",
            period:false
        },
        {
            text:"Period",
            style:"",
            period:true
        }
    ],
    chartOption : {
        backgroundColor:'#fff',
        color:['#8A59D8','#E66B00','#5851E0','#4E9c2d'],
        series:[
            {
                type:'pie',
                radius:['55%','70%'],
                selectMode:'',
                clockWise:true, //默认逆时针
                avoidLabelOverlap:false,
                labelLine:{
                    normal:{
                        show:false
                    }
                },
                itemStyle:{
                    normal:{
                        borderWidth:4,
                        borderColor:'#fff',
                    }
                },
                data:[
                    {value:55,}, //pro
                    {value:27}, //com
                    {value:12}, // clo
                    {value:6}  //cold
                ]
            }
        ]
    }
}