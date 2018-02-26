export default {
  items: [{
    name: 'Home',
    url: '/',
    icon: 'fa fa-home'
  }, {
    name: "Dashboard",
    url: "/dashboard",
    icon: 'icon-speedometer',
    children: [{
      name: "Consolidated Report",
      url: "/report",
      icon: 'icon-speedometer'
    }, {
      name: "Group",
      url: "/group",
      icon: 'icon-speedometer'
    }]
  }, {
    name: 'Track',
    url: '/track',
    icon: ''
  }, {
    name: 'Trace',
    url: '/trace',
    icon: ''
  }, {
    name: 'Immobilizer',
    url: '/immobilizer',
    icon: ''
  }, {
    title: true,
    name: 'Administration',
    wrapper: {
      element: '',
      attributes: {}
    },
    class: ''
  },{
    name: "Management",
    url: "/management",
    icon: 'icon-speedometer',
    children: [{
      name: 'Group',
      url: '/group',
      icon: ''
    },{
      name: 'Subgroup',
      url: '/subgroup',
      icon: ''
    },{
      name: 'Vehicle',
      url: '/vehicle',
      icon: ''
    },{
      name: 'Employee',
      url: '/employee',
      icon: ''
    },{
      name: 'Device',
      url: '/device',
      icon: ''
    }]
  },{
    name: "Mapping",
    url: "/mapping",
    icon: "",
    children: [{
      name: 'Vehicle',
      url: '/mapVehicle',
      icon: ''
    },{
      name: 'Employee',
      url: '/mapEmployee',
      icon: ''
    },{
      name: 'Group',
      url: '/mapGroup',
      icon: ''
    },{
      name: 'SOS Number',
      url: '/sos',
      icon: ''
    },{
      name: 'Boundary',
      url: '/boundary',
      icon: ''
    }]
  },{
    name: "User Registration",
    url: "/register",
    icon: ""
  }]
};
