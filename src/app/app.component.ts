import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Employees', url: '/folder/Employees', icon: 'mail' },
    { title: 'Products', url: '/folder/Products', icon: 'paper-plane' },
    { title: 'Stock Inward', url: '/folder/Stock Inward', icon: 'heart' },
    { title: 'Machines', url: '/folder/Machines', icon: 'archive' },
    { title: 'Orders', url: '/folder/Orders', icon: 'trash' },
    { title: 'Quantity View', url: '/folder/Quantity View', icon: 'warning' },
    { title: 'Other Process', url: '/folder/Other Process', icon: 'warning' },
    { title: 'Invoices', url: '/folder/Invoices', icon: 'warning' },
    { title: 'Despatch', url: '/folder/Despatch', icon: 'warning' },
    { title: 'Buyers', url: '/folder/Buyers', icon: 'warning' },
    { title: 'Sellers', url: '/folder/Sellers', icon: 'warning' },
    { title: 'Production View', url: '/folder/Production View', icon: 'warning' },
    { title: 'Despatch View', url: '/folder/Despatch View', icon: 'warning' },
    { title: 'Invoice View', url: '/folder/Invoice View', icon: 'warning' },
  ];
  public labels = ['Add Employee', 'Add Product'];
  constructor() {}
}
