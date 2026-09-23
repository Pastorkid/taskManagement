import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPromiseExamples } from './rxjs-promise-examples';

describe('RxjsPromiseExamples', () => {
  let component: RxjsPromiseExamples;
  let fixture: ComponentFixture<RxjsPromiseExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPromiseExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPromiseExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
