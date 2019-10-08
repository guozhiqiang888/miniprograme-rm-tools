export let optionsDetials ={
    prespectName:'',
    lists:[
     {
         title:"RM status",
         titleImg:'assets/imgs/icn_User.png',
         titleImgRight:'',
         defaultShow: true,
         list:[
              {name:'Assign RM', iconStyle:'icon-right',imgSrc:'assets/imgs/icn_chevron_right_thick.png',value:'Johnny Li'},
              {name: 'Status',  iconStyle:'icon-right',imgSrc:'assets/imgs/icn_chevron_right_thick.png',value: 'Meeting scheduled'},
              {name: 'Tracking end date', iconStyle:'list-icon',imgSrc:'assets/imgs/icn_Calendar.png', value: '12/07/2019'},
              {name: 'Proiority', iconStyle:'icon-right',imgSrc:'assets/imgs/icn_chevron_right_thick.png', value: 'High'}
         ]
      },
      {
         title:"Contact information",
         iconStyle: "icon-down",
         titleImg:'assets/imgs/icn_User_staff.png',
         titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
         defaultShow: false,
         list:[
             {name:'Contact chinese name', value:'张三'},
             {name: 'Contact english name', value: 'Meeting scheduled'},
             {name: 'Contact personal title', value: 'N/A'},
             {name: 'Primary contact number', value: '+853 7865 6778'},
             {name: 'Secondary contact number', value: 'N/A'},
             {name: 'Primary enail address', value: '123@163.com'},
             {name: 'Secondary enail address', value: '456@163.com'},
             {name: 'Sales revenus.Net worth(RMB)', value: '50,000,000'},
             {name: 'Number of employees', value: '250'},
             {name: 'Country',iconStyle:'icon-down',imgSrc:'assets/imgs/icn_Chevron_down_thick.png', value: 'China'}
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
         list:[{name: 'Comments', value: '',placeholder:'Enter here'}]
       }
    ]
}