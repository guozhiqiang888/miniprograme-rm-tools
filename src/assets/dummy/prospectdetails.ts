export const optionsDetials ={
  prespectName:'',
  lists:[
   {
       title:"RM status",
       titleImg:'assets/imgs/icn_User.png',
       titleImgRight:'',
       defaultShow: true,
       list:[
            {name:'Assign RM', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',value:'John', placeholder:'Select RM'},
            {name: 'Status',  iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',value: '', placeholder:'Select status'},
            {name: 'Tracking end date', iconStyle:'list-icon',
            imgSrc:'assets/imgs/icn_Calendar.png', value: '', placeholder:'Select date'},
            {name: 'Proiority', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png', value: '', placeholder:'Select Priority'}
       ]
    },
    {
       title:"Contact information",
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_User_staff.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       defaultShow: false,
       list:[
           {name:'Contact chinese name', value:'', placeholder:'Enter here'},
           {name: 'Contact english name', value: '', placeholder:'Enter here'},
           {name: 'Contact personal title', value: '', placeholder:'Enter here'},
           {name: 'Primary contact number', value: '', placeholder:'Enter here'},
           {name: 'Secondary contact number', value: '', placeholder:'Enter here'},
           {name: 'Primary enail address', value: '', placeholder:'Enter here'},
           {name: 'Secondary enail address', value: '', placeholder:'Enter here'},
           {name: 'Sales revenus.Net worth(RMB)', value: '', placeholder:'Enter here'},
           {name: 'Number of employees', value: '', placeholder:'Enter here'},
           {name: 'Country',iconStyle:'icon-down',imgSrc:'assets/imgs/icn_Chevron_down_thick.png', value: '', placeholder:'Select country'}
       ]
     },{
       title: 'Referrer information',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_User_multiple.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       defaultShow: false,
       list:[]
     },{
       title: 'Internal information',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Account.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       defaultShow: false,
       list:[]
     },{
       title: 'Activity',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Contact_chat.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       defaultShow: false,
       list:[
        ]
     }
  ]
}