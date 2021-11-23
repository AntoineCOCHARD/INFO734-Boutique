import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCategoryPage } from './view-category.page';

describe('ViewCategoryPage', () => {
  let component: ViewCategoryPage;
  let fixture: ComponentFixture<ViewCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
