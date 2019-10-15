export const optionsDetials ={
  prespectName:'',
  lists:[
   {
       title:"RM status",
       titleImg:'assets/imgs/icn_User.png',
       titleImgRight:'',
       showTitle:true,
       defaultShow: true,
       list:[
            {name:'Assign RM', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',value:'John', placeholder:'Select RM'},
            {name: 'Status',  iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',value: '', placeholder:'Select status'},
            {name: 'Due date', iconStyle:'list-icon',
            imgSrc:'assets/imgs/icn_Calendar.png', value: '', placeholder:'Calendar'},
            {name: 'Expected conversion date', iconStyle:'list-icon',
            imgSrc:'assets/imgs/icn_Calendar.png', value: '', placeholder:'Calendar'},
            {name: 'Proiority', iconStyle:'icon-right',
            imgSrc:'assets/imgs/icn_chevron_right_thick.png', value: '', placeholder:'Select Priority'},

            {name:'Local name', value:'', placeholder:'Enter here'},
            {name:'English name', value:'', placeholder:'Enter here'},
            {name:'ID', value:'', placeholder:'Enter here'},
            {name:'Sales revenue', value:'', placeholder:'Enter here'},
            {name:'Registered Capital', value:'', placeholder:'Enter here'},
            {name:'Number of employees', value:'', placeholder:'Enter here'},
            {name:'Industry', value:'', placeholder:'Enter here'},
            {name:'Phone', value:'', placeholder:'Enter here'},
            {name:'Local name', value:'', placeholder:'Enter here'},
            {name:'Website', value:'', placeholder:'Enter here'},
       ]
    },
    {
       title:"Contact information",
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_User_staff.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
           {name:'Chinese name', value:'', placeholder:'Enter here'},
           {name: 'English name', value: '', placeholder:'Enter here'},
           {name: 'Personal title', value: '', placeholder:'Enter here'},
           {name: 'Gender', value: '', placeholder:'Enter here'},
           {name: 'Primary contact number', value: '', placeholder:'Enter here'},
           {name: 'Secondary contact number', value: '', placeholder:'Enter here'},
           {name: 'Primary enail address', value: '', placeholder:'Enter here'},
           {name: 'Secondary enail address', value: '', placeholder:'Enter here'},
           {name: 'Contact address', value: '', placeholder:'Enter here'},
           {name: 'Contact country', value: '', placeholder:'Enter country'},
           {name: 'Contact province', value: '', placeholder:'Enter province'},
           {name: 'HUB customer code', value: '', placeholder:'Enter code'},
           {name: 'Referral event', value: '', placeholder:'Enter referral'}
       ]
     },
     {
       title: 'Internal information',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Account.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
          {name: 'Financing info', value: '', placeholder:'Enter info'},
          {name: 'Customs info', value: '', placeholder:'Enter info'},
          {name: 'Registration type', value: '', placeholder:'Enter type'},
          {name: 'is existion AMH customer', value: '', placeholder:'Enter referral'},
          {name: 'Anchor company relationship', value: '', placeholder:'Enter referral'},
          {name: 'Anchor company local name', value: '', placeholder:'Enter referral'},
          {name: 'Anchor company english name', value: '', placeholder:'Enter referral'},
          {name: 'Anchor RM', value: '', placeholder:'Enter referral'},
          {name: 'Existion customer segment', value: '', placeholder:'Enter referral'},
          {name: 'Overseas inverstment enterprises', value: '', placeholder:'Enter referral'},
          {name: 'Current financing stage', value: '', placeholder:'Enter referral'},
          {name: 'Key product name', value: '', placeholder:'Enter referral'},
          {name: 'HUB customer code', value: '', placeholder:'Enter referral'}
        ]
     },{
      title: 'Key person',
      iconStyle: "icon-down",
      titleImg:'assets/imgs/icn_User.png',
      titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
      showTitle:false,
      defaultShow: false,
      list:[
        {name: 'Local name', value: '', placeholder:'Enter name'},
        {name: 'English name', value: '', placeholder:'Enter name'},
        {name: 'Contact personal title', value: '', placeholder:'Enter title'},
        {name: 'Gender', value: '', placeholder:'Enter Gender'},
        {name: 'City', value: '', placeholder:'Enter city'}
      ]
    },{
       title: 'Activity',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Contact_chat.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
        {name: 'Comments', value: '', placeholder:'Enter comments'}
        ]
     }
  ]
}