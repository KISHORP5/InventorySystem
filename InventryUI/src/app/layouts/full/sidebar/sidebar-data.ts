import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Inventory Management',
  },
  {
    displayName: 'Devices',
    iconName: 'devices',
    route: '/ui-components/device',
  },
  {
    displayName: 'Category',
    iconName: 'rosette',
    route: '/ui-components/category',
  },
  {
    displayName: 'Brand',
    iconName: 'list',
    route: '/ui-components/brand',
  },
  {
    displayName: 'Suppliers',
    iconName: 'calendar',
    route: '/ui-components/supplier',
  },
  {
    navCap: 'User Management',
  },
  {
    displayName: 'Roles',
    iconName: 'user-check',
    route: '/ui-components/roles',
  },
  {
    displayName: 'User',
    iconName: 'user-check',
    route: '/ui-components/user',
  },
  {
    navCap: 'Device Assignment',
  },
  {
    displayName: 'Assign Devices',
    iconName: 'device-hub',
    route: '/device-assignment/assign',
  },
  {
    displayName: 'Assigned Devices',
    iconName: 'assignment',
    route: '/device-assignment/list',
  },

  {
    navCap: 'Employee and Office',
  },
  {
    displayName: 'Employees',
    iconName: 'users',
    route: '/employee-office/employees',
  },
  {
    displayName: 'Offices',
    iconName: 'building',
    route: '/employee-office/offices',
  },
  {
    navCap: 'Asset Management',
  },
  {
    displayName: 'Maintenance',
    iconName: 'calendar',
    route: '/asset-management/maintenance',
  },
  {
    displayName: 'Service History',
    iconName: 'history',
    route: '/asset-management/service-history',
  },
  {
    displayName: 'Faulty Devices',
    iconName: 'alert-triangle',
    route: '/inventory/faulty-devices',
  },
  {
    navCap: 'Reports and Analytics',
  },
  {
    displayName: 'Reports',
    iconName: 'bar-chart',
    route: '/reports',
  },
];
