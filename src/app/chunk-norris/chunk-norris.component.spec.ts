import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkNorrisComponent } from './chunk-norris.component';

describe('ChunkNorrisComponent', () => {
  let component: ChunkNorrisComponent;
  let fixture: ComponentFixture<ChunkNorrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkNorrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
