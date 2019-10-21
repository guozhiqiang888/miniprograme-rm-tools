export const optionsDetials ={
  prespectName:'',
  lists:[
   {   listIndex:'0',
       title:"General infromation",
       titleImg:'assets/imgs/icn_portfolio.png',
       titleImgRight:'',
       showTitle:true,
       defaultShow: true,
       list:[
            { name:'Assign RM', 
              iconStyle:'icon-right', editAble:true,
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',mapping:'assignRM',value:'', placeholder:'Select RM'},
            {name: 'Status',  iconStyle:'icon-right',editAble:true,
            imgSrc:'assets/imgs/icn_chevron_right_thick.png',mapping: 'status', value:'',placeholder:'Select status'},
            {name: 'Due date', iconStyle:'list-icon',editAble:false,
            imgSrc:'assets/imgs/icn_Calendar.png', mapping: 'dueDate', value:'', placeholder:'Calendar'},
            {name: 'Expected conversion date', iconStyle:'list-icon',editAble:false,
            imgSrc:'assets/imgs/icn_Calendar.png', mapping: 'expectDate', value:'', placeholder:'Calendar'},
            {name: 'Priority', iconStyle:'icon-right',editAble:true,
            imgSrc:'assets/imgs/icn_chevron_right_thick.png', mapping: 'priority', value:'', placeholder:'Select Priority'},

            {name:'Local name', mapping:'localComponentName',editAble:false, value:'',placeholder:'local'},
            {name:'English name', mapping:'englishComponentName',editAble:false, value:'', placeholder:'Enter here'},
            {name:'ID', mapping:'ID', editAble:false,value:'', placeholder:'Enter here'},
            {name:'Sales revenue', editAble:false,mapping:'Salesrevenue', value:'', placeholder:'Enter here'},
            {name:'Registered Capital', mapping:'RegisteredCapital', editAble:false,value:'', placeholder:'Enter here'},
            {name:'Number of employees', mapping:'Numberofemployees', editAble:false,value:'', placeholder:'Enter here'},
            {name:'Industry', mapping:'Industry', value:'',editAble:false, placeholder:'Enter here'},
            {name:'Phone', mapping:'Phone',  value:'',editAble:false,placeholder:'Enter here'},
            {name:'Website', mapping:'Website', value:'',editAble:false, placeholder:'Enter here'},
       ]
    },{  
      listIndex:'1',
       title: 'Internal information',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Account.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
          {name: 'Financing info', mapping: 'financingInfo',editAble:false, value:'', placeholder:'Enter info'},
          {name: 'Customs info', mapping: 'customInfo',editAble:false, value:'', placeholder:'Enter info'},
          {name: 'Registration type', mapping: 'registrationType',editAble:false, value:'', placeholder:'Enter type'},
          {name: 'Is existing AMH customer', mapping: 'isAMHcustomer',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Anchor company relationship', mapping: 'anchorRelationship',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Anchor company local name', mapping: 'anchorLocalName',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Anchor company english name', mapping: 'anchorEnglishName',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Anchor RM', mapping: 'anchorRM',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Existing customer segment', mapping: 'extCustomerSegment', editAble:false,value:'', placeholder:'Enter referral'},
          {name: 'Overseas inverstment enterprises', mapping: 'overseasInverstmentEnterprises',editAble:false,  value:'',placeholder:'Enter referral'},
          {name: 'Current financing stage', mapping: 'currentFinancingStage',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Key product name', mapping: 'keyProduceName',editAble:false,  value:'',placeholder:'Enter referral'},
          {name: 'HUB customer code', mapping: 'hubCode',editAble:false, value:'', placeholder:'Enter referral'},
          {name: 'Date founded', mapping: 'dateFounded',editAble:false, value:'', placeholder:'Enter referral'}
        ]
     }
    //  ,{
    //   listIndex:'3',
    //   title: 'Key person',
    //   iconStyle: "icon-down",
    //   titleImg:'assets/imgs/icn_User.png',
    //   titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
    //   showTitle:false,
    //   defaultShow: false,
    //   list:[
    //     {name: 'Local name', mapping: 'localName',editAble:false, value:'', placeholder:'Enter name'},
    //     {name: 'English name', mapping: 'englishName',editAble:false, value:'', placeholder:'Enter name'},
    //     {name: 'Contact personal title', mapping: 'contactPersonalTitle',editAble:false, value:'', placeholder:'Enter title'},
    //     {name: 'Gender', mapping: 'gender', value:'',editAble:false, placeholder:'Enter Gender'},
    //     {name: 'City', mapping: 'city',editAble:false, value:'', placeholder:'Enter city'}
    //   ]
    // }
    ,{
      listIndex:'3',
       title:"Primary Contact",
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_User_staff.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
           {name:'Chinese name', mapping:'chineseName',editAble:false, value:'', placeholder:'Enter here'},
           {name: 'English name', mapping: 'englishName',editAble:false, value:'', placeholder:'Enter here'},
           {name: 'Personal title', mapping: 'personalTitle',editAble:false, value:'', placeholder:'Enter here'},
           {name: 'Gender', mapping: 'gender', value:'',editAble:false, placeholder:'Enter here'},
           {name: 'Primary contact number',editAble:false, mapping: 'primaryNumber',  value:'',placeholder:'Enter here'},
           {name: 'Secondary contact number', mapping: 'secondNumber',editAble:false,  value:'',placeholder:'Enter here'},
           {name: 'Primary email address', mapping: 'primaryEmail',editAble:false, value:'', placeholder:'Enter here'},
           {name: 'Secondary enail address', mapping: 'secondEmail',editAble:false, value:'', placeholder:'Enter here'},
           {name: 'Contact address', mapping: 'contactAddress',editAble:false,  value:'',placeholder:'Enter here'},
           {name: 'Contact country', mapping: 'contactCountry',editAble:false, value:'', placeholder:'Enter country'},
           {name: 'Contact province', mapping: 'contactProvience',editAble:false, value:'', placeholder:'Enter province'},
           {name: 'Referral event', mapping: 'referralEvent',editAble:false, value:'', placeholder:'Enter referral'}
       ]
     }
     ,
     {
      listIndex:'4',
       title: 'Activity',
       iconStyle: "icon-down",
       titleImg:'assets/imgs/icn_Contact_chat.png',
       titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
       showTitle:true,
       defaultShow: false,
       list:[
        {name: 'Comments', mapping: '', editAble:true,value:'', placeholder:'Enter comments', 
          buttons:[
            {title:"Send", enable:""}
          ]}
        ]
     }
  ],
  buttons:{
    details:[
      {title:'Update prospect', enable:''},
      {title:'Reject prospect', enable:''}
    ],
    detailsShow:[
      {title:'Update contact information', enable:''},
      {title:'Edit HUB customer code', enable:''}
    ],
    create:[
      {title:'Create prospect'}
    ]
  }
}