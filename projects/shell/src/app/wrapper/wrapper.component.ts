import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, Inject, Injector, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';

@Component({
  selector: 'app-prueba-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) public content!: ViewContainerRef;

  constructor(
    private injector: Injector
  ) { }

  ngOnInit() {
    this.loadContent();
  }

  public async loadContent() {
    const component = await loadRemoteModule('mfPrueba', './pruebaHomeComponent').then(m => m.HomeComponent);
    await loadRemoteModule('mfPrueba', './pruebaModule').then((m) => {
       const moduleRef = createNgModule(m.PruebaMainModule, this.injector);
       this.content.createComponent(component, {injector: this.injector, ngModuleRef: moduleRef});
     });
  }
}
