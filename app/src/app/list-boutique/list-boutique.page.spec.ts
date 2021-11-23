import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBoutiquePage } from './list-boutique.page';

describe('ListBoutiquePage', () => {
  let component: ListBoutiquePage;
  let fixture: ComponentFixture<ListBoutiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoutiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBoutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
